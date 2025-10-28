// 1️⃣ Get input elements
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

// 2️⃣ Functions for calculations
function add() {
  const sum = Number(num1.value) + Number(num2.value);
  result.textContent = "Result: " + sum;
}

function subtract() {
  const diff = Number(num1.value) - Number(num2.value);
  result.textContent = "Result: " + diff;
}

function multiply() {
  const mul = Number(num1.value) * Number(num2.value);
  result.textContent = "Result: " + mul;
}

function divide() {
  if (Number(num2.value) === 0) {
    result.textContent = "Cannot divide by zero!";
    return;
  }
  const div = Number(num1.value) / Number(num2.value);
  result.textContent = "Result: " + div;
}

// 3️⃣ Button event listeners
document.getElementById("addBtn").addEventListener("click", add);
document.getElementById("subBtn").addEventListener("click", subtract);
document.getElementById("mulBtn").addEventListener("click", multiply);
document.getElementById("divBtn").addEventListener("click", divide);
