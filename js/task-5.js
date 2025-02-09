const btnEl = document.querySelector(".change-color");
const outputEl = document.querySelector(".color");

btnEl.addEventListener("click", onBtnClick);

function onBtnClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  outputEl.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
