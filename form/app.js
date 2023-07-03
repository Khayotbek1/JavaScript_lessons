const signupForm = document.getElementById("signup-form");
const userName = document.getElementById("username");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(userName.value);
});
