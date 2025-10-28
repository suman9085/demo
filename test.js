//===alert==promt==console.log===console.warn==
// alert("hello world")
// let name = prompt("enter the value")
// console.log("name =",name)
//======variable===
// x = 10;
// console.log(x)
// title = "ducat";---
// console.log(title)
// a1 = 1000
// console.log(a1)
//========object=======
// item ={
//     id:'121',
//     name:"suman",
//     brand:"dell",
//     price:450
// }
// console.log(item)
// console.log(item.brand)
// console.log(item ?.name)
// console.log(item["price"])
//=====let,var,const====
//====hoisting
// let a = 10
// a = 20
// console.log("value of a = ",a)
// var title = "ducat"
// console.log(title)
// let age = 30;
// console.log(age)

// let a = 10;
// a = 20;
// console.log("value of a =",a)
// console.log("value of a =",+a)
//=======Adding two numbers is js(es6)===
//==> string template ${variblename}
// let num1 = 100, num2 = 200, sum;
// sum = num1 + num2;
// console.log(sum)
// console.log(`sum of ${num1} and ${num2} is ${sum}`)
// console.log(`sum of ${num1} and ${num2} is ${sum}`)
// console.log("sum of " +num1 + " and " +num2 + " is " + sum)
//====== ebill=======
// let mtr = 1234;
// let new_reading = 1000;
// let old_reading = 600;
// let unit = new_reading - old_reading;
// let bill = unit * 4;
// console.log(`meter no : ${mtr}`)
// console.log(`unit : ${unit}`)
// console.log(`bill : ${bill}rs`)
// let a = 10, b = 20, c;
// c = a
// a = b
// b = c

// console.log(a)
// console.log(b)
//=======wap=====
// let sname = "suman";
// let roll = 12
// science = 60;
// math = 75;
// english = 80;
// hindi = 85;
// physics = 90;
// total_sub = science + math + english + hindi + physics;
// total = 500;
// // let total_marks = total / total_sub
// percentage = ( total_sub / total) * 100
// console.log(`total number : ${total_sub}`)
// console.log(`percentage : ${percentage}%`)
//====uary operator===
// let x = 10;
// x++;
// ++x;
// x--;
// --x;
// console.log(x);
//=====used with other variable===
// let a = 10, b ;
// b = a++;
// b = ++a;
// console.log(`value of a :${a}`)
// console.log(`value of b ${b}`)
// let p = 5, k=6,s;
// s = p++ + ++k;
// console.log(s)
// let x = 10;
// console.log(x++)
// console.log(++x)
// console.log(x--)
// console.log(--x)
//=====binary operator===
// console.log(9/2);
// console.log(9%2);
// console.log(9**3);
// console.log(10=="10")
// console.log(10==="10")
// console.log(10<10)
// console.log(10<20 || 5>20)
// let aadhar = "yes" ,pancard = "yes" ,ebill = "no", dl = "yes", voertid = "no"
// let aadhar = true;
// pancard = true;
// ebill = false;
// dl = true;
// voterid = false;

// optional = ebill || dl || voterid;

// let res = aadhar && pancard && optional;
// console.log(`account open = ${res}`)
// let username = "suman";
// password = "12345";
// if(username === "suman" && password === "12345"){
//     console.log("login successfully")
// }else{
//     console.log("login failed")
// }
//=====Driving License Example (AND Operator)==
// let age = 20
// let testpass = true
// if(age>=18 && testpass){
// console.log("driving license successfully")
// }else{
//     console.log("driving license failed")
// }
//======object use in key:value are use in code===
// let product = {
//     id:121,
//     name:"suman",
//     brand:"dell",
//     price:2000
// }
// console.log(product)
// let book = {}
// book.id ="121";
// book.title = "c++";
// console.log(book)
//=====array ========
// let data = [10,20,"ducat",40]
// console.log(data[2])
//function====
// function message(x,y){
//     console.log("this is fun!",x+y)
// }
// message(5,6)
// message()
//===if => single condition==
// let sales = 15000,comm;
// if(sales>20000){
// comm = sales*5/100
// }
// else{
//     comm = 0
// }
// console.log(`your sales : ${sales}`)
// console.log(`your comm : ${comm}`)
// let num = 18;
// if(num % 2 == 0){
//     console.log(`${num} is even`)
// }
// else{
//     console.log(`${num} is odd`)
// }
//========if else elseif======
// let choice = prompt("enter the number(1-4)");
// if(choice == 2){
// console.log("good morning")
// }else if(choice == 3){
//     console.log("good afternoon")
// }else if(choice == 4){
//     console.log("good evening")
// }else{
//     console.log("good night")
// }
//===switch case======
// let choice = 2;
// switch (choice) {
//   case 1:
//     console.log("good morning");
//     break;
//   case 2:
//     console.log("good afternoon");
//     break;
//   case 3:
//     console.log("good evening");
//   case 4:
//     break
//     console.log("good night");
//   default:
//     console.log("wrong choice");
//     break
// }
//=====looping while,for,do while ==
// let x = 1,sum = 0;
// while(x<=10){
//     console.log(`${x}`)
//     sum = sum +x;
//     x++;
// }
// console.log(`${sum}`)
// let x = 1
// while(x<=10){
// if(x%2==0){
// console.log(`even number :${x}`)
// }else{
//     console.log(`odd number is:${x}`)
// }
// x++;
// }
//for loop======
// for(x=1; x<=10; x++){
//     if(x%2==0){
// console.log(`even: ${x}`)
//     }else{
//         console.log(`odd is :${x}`)
//     }

// }
// for(i=0; i<=10; i++){
//     if(i==5 || i==7){
//         console.log("ducat")
//         continue
//     }
//     console.log(i)
// }
// console.log("out of loop")
//====array with loop===
// let num = [10,20,30,40,50]
// let sum = 0;
// for(i=0; i<5; i++){
//     console.log(num[i])
//     sum = sum + num[i]
// }
// console.log(`sum is :${sum}`)
//======nested loop======
// for(i=1; i<=3; i++)
//     {
//     for(j=1; j<=i; j++){
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n")
// }
// for(i=1; i<=3; i++)
//     {
//     for(j=1; j<=i; j++){
//         process.stdout.write(`${j}`)
//     }
//     process.stdout.write("\n")
// }
// for(i=1; i<=5; i++)
//     {
//     for(j=1; j<=i; j++){
//         process.stdout.write(`${j}`)
//     }
//     for(k=5; k>i; k--){
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n")
// }

//  for(i=1; i<=5; i++)
//     {
//     for(j=1; j<=i; j++){
//         process.stdout.write(j + "");
//     }
//     for(k=i -1; k>=1; k--){
//         process.stdout.write(k + "");
//     }
//     process.stdout.write("\n")
// }
//=====function with argument===
// function msg(){
//     console.log("h1 msg")
// }
// for(i=1 ;i<=5; i++){
// msg()
// }
// if(true){
//     msg()
// }
//2. function having argument/parameters
// function sum(x,y){
// let add = x+y;
// console.log(`sum is: ${add}`)
// }
// sum(10,50)
//3. function having return value
// function msg(){
//     return [10,20,30,40]
// }
// console.log(msg())
// let res = msg()
// console.log(res)
//function having args and return both
// function sum(x,y){
//     let add = x + y
//     return add
// }
// let res = sum(10,20)
// console.log(res)
//==anonymous function====
// const stud = function(name)
// {
//     console.log(`hello, ${name}`)
// }
// stud("suman")
//=====normal function==
// const stud = function (x) {
//   console.log(x * x);
// };
// stud(9);
//=====arrow function====
// const square = (x) => {
//   console.log(x * x);
// };
// square(9);
// const square = (x) =>{
//     return(x*x)
// }
// let res = square(9)
// console.log(res)
//=======high ordered function==
// function rk(title,cb)
// {
//     console.log(title)
//     cb()
// }
// rk('ducat',function(){console.log("hello world")})
// function test(){
//     return function(){
//         console.log("delhi")
//     }
// }
// let res = test()
// res()
function rk(x,y,k=100){
    console.log(x+y+k)
}
rk(12,30)
