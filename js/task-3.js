const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(e) {
  const value = e.target.value.trim();
  const userName = value.length ? value : "Anonumous";

  outputEl.textContent = userName;
}
