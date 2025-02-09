const boxEl = document.querySelector("#boxes");
const dataFieldEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");

createBtnEl.addEventListener("click", onCreateBtnClick);
destroyBtnEl.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  const amount = +dataFieldEl.value;
  if (amount < 1 || amount > 100) return alert("choose number from 1 to 100");

  createBoxes(amount);
}

function onDestroyBtnClick() {
  boxEl.innerHTML = "";
}

function createBoxes(amount) {
  let markup = "";

  for (let index = 0; index < amount; index++) {
    markup += `<div style="width: ${30 + 10 * index}px; 
    height: ${30 + 10 * index}px; 
    background-color: ${getRandomHexColor()}"></div>`;
  }

  boxEl.innerHTML = markup;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
