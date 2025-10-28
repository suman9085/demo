// unary operator
// let x = 10;
// x++;
// ++x;
// console.log(`${x}`);
// let a = 11,
//   b;
// b = ++a;
// console.log(`value of a :${a}`);
// console.log(`value of b :${b}`);

// let p = 5,
//   k = 6,
//   s;
// s = p++ + ++k;
// console.log(`value of s :${s}`);
// console.log(`value of p :${p}`);
// console.log(`value of k :${k}`);

// let x = 10;
// console.log(x++);
// console.log(++x);
// console.log(x);
// console.log(x++);

// let a = 5;
// console.log(a++);
// console.log(++a);
// console.log(a--);
// console.log(--a);

// let b = 3;
// console.log(b++ + ++b);
// console.log(b);

// let x = 4;
// console.log(x++ + x++ + ++x);
// console.log(x);

// let c = 4;
// console.log(c++ + c-- + ++c + c);
// console.log(c);

// binary operator
// 6
// relational operator

// let x=8, y=9;
// // let z= x & y;
// // let z = x | y;
// let z = x ^ y;
// console.log(`z = ${z}`)

// let a=8,b;
// b = a<<1;
// console.log(`b = ${b}`)

// let a= 11;
// let b= ~ a
// console.log(`b = ${b}`)

//  let aadhar = "yes", pancard="yes", ebill="yes",dl="yes",voterid="yes"

// let aadhar = "yes" &&
// c = aadhar && pancard
// console.log(`c = `)

let aadhar = true;
let pancard = true;
let passport = false;
let driving_license = false;
let voterid = true;

let optional = passport || driving_license || voterid;

let result = aadhar && pancard && optional;

console.log(`account open = ${result}`);
