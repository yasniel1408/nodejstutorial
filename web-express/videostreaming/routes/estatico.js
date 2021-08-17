var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("statico", { title: "Video Estático" });
});

router.get("/video", function (req, res, next) {
  const fileVideo = __dirname + "/public/video/video.mp4";

  res.type("video/mp4");

  res.sendFile(fileVideo);
});

module.exports = router;
