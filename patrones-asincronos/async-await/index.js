function numeroAleatorio() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 100));
    }, 2000);
  });
}

async function resultado() {
  console.log("resultado invocado");
  const result = await numeroAleatorio();
  console.log(`Resultado: ${result}`);
}

resultado();
