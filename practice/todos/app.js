const ul = document.querySelector(".list-item");
const items = document.querySelectorAll(".item");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = "The best developer Khayot Razzakov";
  ul.appendChild(li);
});

ul.addEventListener("click", (e) => {
  if (e.target.nodeName == "LI") {
    e.target.remove();
  }
});
