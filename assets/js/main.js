const background = document.querySelector("body");
const button = document.querySelector("#changeColor");
const h1 = document.querySelector("#h1");
const textoCor = document.querySelector("#textoCor")
const coresAleatorias = [
  "crimson",
  "darkblue",
  "gold",
  "forestgreen",
  "darkorchid",
  "coral",
  "darkorange",
  "hotpink",
  "rebeccapurple",
  "teal",
];

button.addEventListener("click", () => {
  const indiceAleatorio = Math.floor(Math.random() * coresAleatorias.length);

  const nomedaCor = coresAleatorias[indiceAleatorio];

  background.style.backgroundColor = nomedaCor;
  textoCor.innerHTML = coresAleatorias[indiceAleatorio]
  textoCor.style.color = nomedaCor
});
