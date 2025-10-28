// function add() {
//   let sale = 200;
//   let name = "suman";
//   console.log(`sales : ${sale}`);
//   console.log(`name : ${name}`);
// }
// add();
//===============add parameter=================
// function greek(a, b) {
//   console.log("sum", a + b);
// }
// greek(5, 6);
//=========loop use in function========
// function msg() {
//   console.log("hello suman");
// }
// for (i = 1; i <= 5; i++) {
//   msg();
// }
// if (true) {
//   msg();
// }
//=============function having arguments/parameter=====
// function sum(a, b) {
//   //parameter
//   let add = a + b;
//   console.log(`sum : ${add}`);
// }
// sum(20, 40); //arguments
// sum(200, 40);
//=======function having return value====
// function msg() {
//   return {
//     name: "suman",
//     age: 20,
//   };
// }
// console.log(msg()); // yek tarika ye hai
// let res = msg(); //dusra tarika ye
// console.log(res);

// function having arguments and return both
// function add(x, y) {
//   let sum = x + y;
//   console.log(`sum :${sum}`);
//   return [10, 20, 30, 40];
// }
// let res = add(6, 8);
// console.log(res);
//=========anonymous function===
// const stud = function (name) {
//   console.log(`hello,${name}`);
// };
// stud("suman");
//===========arrow function===========
const square = function (x) {
  console.log(x * x);
};
square(9);
// const square1 = (x) => {
//   console.log(x * x);
// };
// square1(9);

// const square1 = (x) => x * x;
// let res = square1(9);
// console.log(res);

const square1 = (x) => x * x;
let res = square1(9);
console.log(res);
