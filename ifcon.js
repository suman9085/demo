//=============conditional statement===========
// if => single condition
// let sales = 2500,
//   comm;
// if (sales > 2000) {
//   comm = (sales * 5) / 100;
// } else {
//   comm = 0;
// }
// console.log(`sales :${sales}`);
// console.log(`commission :${comm}`);

//=================multiple if condition===============
// let sales = 1500;
// let comm;
// if (sales > 2000) {
//   comm = (sales * 10) / 100;
// } else if (sales > 1500) {
//   comm = (sales * 7) / 100;
// } else if (sales > 1000) {
//   comm = (sales * 5) / 100;
// } else {
//   comm = 0;
// }
// console.log(`Sales: ${sales}`);
// console.log(`Commission: ${comm}`);

let sales = 2000;
let customerType = "premium";
let comm;
if (sales > 1000 && customerType === "premium") {
  comm = (sales * 10) / 100;
} else {
  comm = 0;
}
console.log(`sales :${sales}`);
console.log(`commission :${comm}`);
