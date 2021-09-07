const btn = document.getElementById("submit");
const email = document.getElementById("email");
const textError = document.getElementById("error-text");
const imgError = document.getElementById("error-img");
const addEmail = document.getElementById("added-email");

function validateEmail(e) {
  e.preventDefault();
  const pattern =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  let inputText = email.value;

  if (pattern.test(inputText)) {
    addEmail.classList.remove("ad-email");
    textError.classList.add("error-msg");
    imgError.classList.add("error-logo");
    email.value = "";
  } else {
    textError.classList.remove("error-msg");
    imgError.classList.remove("error-logo");
    email.value = "";
  }
}

btn.addEventListener("click", validateEmail);
