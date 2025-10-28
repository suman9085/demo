// ==============dom============
let input = document.getElementById("task");
let button = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

button.addEventListener("click", addTask);

function addTask() {
  if (input.value.trim() === "") return;
  let li = document.createElement("li");
  li.textContent = input.value;
  li.style.color = "blue";
  taskList.appendChild(li);
  input.value = "";
}
