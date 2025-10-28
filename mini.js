//=====================dom project===============

let input = document.getElementById("task");
let button = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

button.addEventListener("click", function () {
  if (input.value.trim() === "") return;
  taskList.textContent = "Namaste " + input.value + " 👋";
  input.value = "";
});
