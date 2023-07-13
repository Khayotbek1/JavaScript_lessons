const formCreate = document.getElementById("form-create");
const formEdit = document.getElementById("form-edit");
const listGroupTodo = document.getElementById("list-group-todo");
// const messageCreate = document.getElementById("message-create");
const time = document.getElementById("time");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
/* time elements */
const fullDay = document.getElementById("full-day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const closeEl = document.getElementById("close");

//Functions
// show Error
function showMessage(where, message) {
  document.getElementById(`${where}`).textContent = message;

  setTimeout(() => {
    document.getElementById(`${where}`).textContent = "";
  }, 1500);
}

{
}

// check
const todos = JSON.parse(localStorage.getItem("list"))
  ? JSON.parse(localStorage.getItem("list"))
  : [];

if (todos.length) showTodos();

// function  setTodos to localstroge

function setTodos() {
  localStorage.setItem("list", JSON.stringify(todos));
}

// show todos function

function showTodos() {
  const todos = JSON.parse(localStorage.getItem("list"));
  todos.forEch((item, i) => {
    listGroupTodo.innerHTML += `
     <li class="list-group-item d-flex justify-content-between">
    hello world
    <div class="todo-icons">
      <span class="opacity-50 me-2">14.07.2023</span>
      <img src="img/edit.svg" alt="edit icon" width="25" height="25">
      <img src="img/delete.svg" alt="edit icon" width="25" height="25">
    </div>
    </li>
    `;
  });
}

//get todos

formCreate.addEventListener("submit", (e) => {
  e.preventDefault();
  const todosText = formCreate["input-create"].value.trim();
  formCreate.reset();

  if (todosText.length) {
    todos.push({
      text: todosText,
      time: "16:45, 14.07.2023",
      completed: false,
    });
    setTodos();
    console.log(todos);
  } else {
    showMessage("message-create", "Please enter some text");
  }
});
