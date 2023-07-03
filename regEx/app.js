const signupForm = document.getElementById("signup-form");
// const userName = document.getElementById("username");
const message = document.querySelector(".message");

//success function
const success = () => {
  message.textContent = "Success";
  message.classList.remove("hidden");
  message.style.backgroundColor = "lightgreen";
  message.style.color = "#000";
};

//error function
const error = () => {
  message.textContent = "a-z, A-Z, 0-9, min-6, max-12";
  message.classList.remove("hidden");
  message.style.backgroundColor = "red";
  message.style.color = "#fff";
};

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const regEx = /^[a-zA-Z0-9]{6,12}$/;
  const inputVal = signupForm.username.value;
  if (regEx.test(inputVal)) {
    success();
  } else {
    error();
  }
});
