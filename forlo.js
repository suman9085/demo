//=============for===================
// for (let num = 1; num <= 10; num++) {
//   if (num % 2 === 0) {
//     console.log(num + " is even");
//   } else {
//     console.log(num + " is odd");
//   }
// }

// for (let a = 1; a <= 5; ++a) {
//   console.log(`${a}`);
// }

// for (let num = 1; num <= 20; num++) {
//   if (num % 2 !== 0) {
//     console.log(num + " is odd");
//   }
// }
// for (let num = 1; num <= 20; num += 2) {
//   console.log(num + " is Odd");
// }
//================do while===========
// let a = 1;
// do {
//   console.log(a);
//   a++;
// } while (a <= 5);

//===============jump statement============
// for (i = 1; i <= 10; ++i) {
//   if (i == 5) {
//     break;
//   }
//   console.log(i);
// }
// console.log("out of loop");
//===continue===
// for (i = 1; i <= 10; ++i) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }
// console.log("out of loop");
//============array ke sath loop===============
let num = [10, 20, 30, 40, 50];
let sum = 0;
for (i = 0; i < 5; ++i) {
  console.log(num[i]);
  sum = sum + num[i];
}
console.log(`sum : ${sum}`);
//================nested if=================
