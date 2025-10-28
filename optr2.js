//=========addition,substract,multiply,divide===
// let a = 8;
// let b = 6;
// let c = a + b;
// console.log("a =", a, "& b=", b);
// console.log(`add = ${c}`);
// console.log("add", a + b);
// console.log("add", a - b);
// console.log("add", a * b);
// console.log("a / b =", a / b);
//========unary operator====
//========1.increment=======
//========2.decrement=======
// let a = 8;
// let b = 6;
// //a++;
// console.log("a++ =", a++);
// console.log("++a =", ++a);
// console.log("--a =", --a);
// console.log("a =", a);
//======comparison operator====
// let a = 5;
// let b = 2;
// console.log("5 == 2", a == b);
//========logical operator=====
// let a = 6;
// let b = 5;
// // let cond1 = a > b; //true
// // let cond2 = b === 6; //false
// console.log(a < b && a === 6);
//=======OR operator
// let a = 6;
// let b = 5;
// console.log(a < b || a == 6);
//===========conditional statement======
// let age = 18;
// if (age >= 18) {
//   console.log("hello yes");
// }
// if (age < 18) {
//   console.log("you cannot vote");
// }

// let age = 18;
// let mode = "dark";
// let color;
// if (mode === "dark") {
//   color = "black";
// } else {
//   color = "white";
// }
// console.log(color);
//===odd or even number check=====
// let num = 10;

// if (num % 2 === 0) {
//   console.log(num, "is even");
// } else {
//   console.log(num, "is odd");
// }
// let num = prompt("enter a number");

// if (num % 2 === 0) {
//   console.log(num, "is even");
// } else {
//   console.log(num, "is odd");
// }

let score = prompt("enter a score(0-100):");
let grade;
if (score >= 90 && score <= 100) {
  console.log("A ");
} else if (score >= 70 && score <= 89) {
  console.log("B");
} else if (score >= 50 && score <= 60) {
  console.log("C");
} else if (score >= 30 && score <= 40) {
  console.log("D");
} else if (score >= 0 && score <= 0) {
  console.log("not grade match");
}
