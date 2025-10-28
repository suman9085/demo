// const person = {
//     name:"suman",
//     lname:"kumar",
//     fullname:function(){
//         console.log(`this is your name is ${this.name} ${this.lname}`)
//     }
// }
// person.fullname()


// const person = {
//     name:"suman",
//     age: 22,
//     show:function(){
//         console.log(`this is your name is ${this.name} ${this.age}`)
//     }
// }
// const user ={
//     name:"ravi",
//     age:25,
//     show:person.show
// }
// person.show();
// user.show()

//======promise function======
// let a = 10, b;
// console.log("loading..")
// let promise2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         b = 20;
//         resolve()
//     }, 3000);
// })
// promise2.then(()=>console.log(a+b))

//promise then use ========
// let promise = new Promise((resolve, reject) => {
//     let status = true; // true = success, false = error
//     status
//         ? resolve({ id: 111, name: "suman", email: "suman@gmail.com" })
//         : reject({ Error: "Something went wrong!" });
// });

// console.log("Data is loading...\n");

// promise
// .then((data) => {
//     console.log("✅ Promise resolved successfully!\n");
//     // console.log("id   :", data.id);
//     console.log("name :", data.name);
//     console.log("email:", data.email);
// })
// .catch((err) => {
//     console.log("❌ Promise rejected!");
//     console.log("Error:", err.Error);
// })
// .finally(() => {
//     console.log("\nAll done!");
// });

let promise = new Promise((resolve, reject) => {
    let status = true; // true = success, false = error

    if (status) {
        // status true hai → kaam successful
        resolve({ id: 111, name: "Suman", email: "suman@gmail.com" });
    } else {
        // status false hai → kaam fail
        reject({ Error: "Something went wrong!" });
    }
});

// Normal console log (Promise chain ke bahar)
console.log("Data is loading...\n");

// Promise chain
promise
.then((data) => {
    console.log("✅ Promise resolved successfully!\n");
    console.log("id   :", data.id);
    console.log("name :", data.name);
    console.log("email:", data.email);
})
.catch((err) => {
    console.log("❌ Promise rejected!");
    console.log("Error:", err.Error);
})
.finally(() => {
    console.log("\nAll done!");
});



