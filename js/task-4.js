const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const form = new FormData(e.target);
  const data = Object.fromEntries(form);

  const isDataInValid = Object.values(data).some((item) => !item.length);
  if (isDataInValid) {
    return alert("All form fields must be filled in");
  }

  console.log(data);
  e.target.reset();
  //   console.log(e.target.elements.email.value);
  //   console.log(e.target.elements.password.value);
}
