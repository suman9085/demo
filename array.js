//array
// let arr1 = []
// console.log(arr1)
// arr1.push(10)
// arr1.push(30)
// arr1.push(40)
// arr1.push(50)
// console.log(arr1)
// arr1.pop()
// arr1.pop()
// console.log(arr1)
// arr1.unshift(100)
// arr1.unshift(60)
// console.log(arr1)
// arr1.splice(2,1,40,"60","80")
// console.log(arr1)
// let arr1 = [10, 20, 30];
// let arr2 = [...arr1, 50, 60, 70];
// console.log(arr2);

// let person = { i: 100 };
// let person2 = { ...person, city: "delhi" };
// console.log(person2);

//...(rest operator)
// function sum(...args) {
//   let s = 0;
//   for (i = 0; i<args.length; i++) {
//     s = s + args[i];
//   }
//   console.log(`sum is : ${s}`);
// }
// sum(10, 20, 30,60);
//===========foreach ,map, filter,reduce=====
// let nums = [10,20,30,40,50]
// // for(let i=0 ;i<nums.length; ++i){
// //     console.log(nums[i])
// // }
// nums.forEach((num,i) =>{
//     console.log(num,i)
// })

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val,i) => {
//   console.log(val,i);
// });
//square foreach==
// let arr = [2, 3, 4, 5];
// arr.forEach((num) => {
//   console.log(num * num);
// });
//==map function
// let nums = [22,33,44]
// let cal = nums.map((val) =>{
//     return val * val;
// })
// console.log(cal);
//======filter method===
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let res = arr.filter((val) =>{
//     return val  > 3;
// })
// console.log(res)
// let students = [
//     {name:"Suman",marks: 85},
//     {name:"Ravi",marks: 40},
//     {name:"Tinku",marks: 75},
//     {name:"Raman",marks: 90}
// ];
// let pass = students.filter((student) =>{
//  return student.marks > 50;
// })
// console.log(pass)
// let users = [
//   { name: "Suman", active: true },
//   { name: "Raman", active: false },
//   { name: "Ankit", active: true },
// ];
// let res = users.filter((val) => {
//   return val.active === true;
// });
// console.log(res);
// let ages = [10,20,30,40,50]
// let new_ages = ages.filter((age) =>{
//     return age > 30;
// })
// console.log(new_ages)
// //reduce
// let num = [10,20,30,40]
// let result = num.reduce((acc,n) =>{
//     return acc+n
// },0)
// console.log(result)
// let products = [
//   { id: 111, name: "mouse", brand: "dell", price: 500 },
//   { id: 112, name: "keyboard", brand: "tvs", price: 1100 },
//   { id: 113, name: "printer", brand: "dell", price: 540 },
//   { id: 114, name: "keyboard", brand: "hp", price: 600 },
//   { id: 115, name: "cpu", brand: "intel", price: 5000 },
// ];
// let result = products.filter((product) =>{
//     return product.name=="keyboard"
// })
// console.log(result)
//=======2-d array==
let m1 = [[5,6,1],[3,2,1],[9,8,4]]
let m2 = [[3,2,1],[4,4,1],[7,6,4]]
let s = [[],[],[]]
process.stdout.write(`\n Matrix m1\n`)
{
    for(r=0 ; r<3 ; r++){
        for(c=0; c<3; c++){
            process.stdout.write(`${m1[r][c]}`)
            process.stdout.write(` `)
        }
        process.stdout.write(`\n`)
    }
}
process.stdout.write(`\n Matrix m2\n`)
{
    for(r=0 ; r<3 ; r++){
        for(c=0; c<3; c++){
            process.stdout.write(`${m2[r][c]}`)
            process.stdout.write(` `)
        }
        process.stdout.write(`\n`)
    }
}
process.stdout.write(`sum of matrix \n`)
{
    for(r=0 ; r<3 ; r++){
        for(c=0; c<3; c++){
            s[r][c] = m1[r][c] + m2[r][c]
            process.stdout.write(`${s[r][c]}`)
            process.stdout.write(` `)
        }
        process.stdout.write(`\n`)
    }
}
    
