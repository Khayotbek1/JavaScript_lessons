const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.querySelector(".overlay");

// add hidden classList function
const addHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// removw hidden classList function
const removeHiddin = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

showBtn.addEventListener("click", removeHiddin);
closeBtn.addEventListener("click", addHidden);
overlay.addEventListener("click", addHidden);
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});
