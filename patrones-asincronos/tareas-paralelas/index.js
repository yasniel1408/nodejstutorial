function getMensajes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("mensajes");
    }, 2000);
  });
}

function getFotos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fotos");
    }, 2000);
  });
}

function getTransacciones() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("transacciones");
    }, 2000);
  });
}

Promise.all([getMensajes(), getFotos(), getTransacciones()]).then((valores) => {
  console.log(valores);//un arreglo con los resultados en el orden de ejecucion
});
