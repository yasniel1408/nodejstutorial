var express = require("express");
var router = express.Router();
const { stat, createReadStream } = require("fs");
const { promisify } = require("util");
const fileInfo = promisify(stat);

router.get("/", function (req, res, next) {
  res.render("streaming", { title: "Video en Streaming" });
});

router.get("/video", function (req, res, next) {
  const fileVideo = "./public/video/video.mp4";

  res.writeHead(200, {
    "Content-Type": "video/mp4",
  });

  createReadStream(fileVideo).pipe(res);
});

router.get("/video-range", async function (req, res, next) {
  const fileName = "./public/video/video.mp4";
  const { size } = await fileInfo(fileName);
  const range = req.headers.range;

  if (range) {
    let [start, end] = range.replace(/bytes=/, "").split("-");
    start = parseInt(start, 10);
    end = end ? parseInt(end, 10) : size - 1;

    res.writeHead(206, {
      "Content-Type": "video/mp4",
      "Content-Length": end - start + 1,
      "Accept-Ranges": "bytes",
      "Content-Range": `bytes ${start}-${end}/${size}`,
    });

    createReadStream(fileName, { start, end }).pipe(res);
  } else {
    res.writeHead(200, {
      "Content-Type": "video/mp4",
      "Content-Length": size,
    });

    createReadStream(fileName).pipe(res);
  }
});
module.exports = router;
