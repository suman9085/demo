//==============callback hell==
// function getdata(dataId,getnexdata){
//     setTimeout(() => {
//     console.log("data",dataId)
//     if(getnexdata){
//         getnexdata();
//     }
//     },2000);
// }
// getdata(1,() =>{
//     console.log("getting data2......")
//     getdata(2,() =>{
//         console.log("getting data3....")
//     })
// })
//==========async await====
// function getData(dataId){
//     return  new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//         },2000);
//     });
// }
// async function getAlldata() {
//    console.log("getting data1........");
//    await getData(1);
//    console.log("getting data2...");
//    await getData(2);
//    console.log("getting data3..");
//    await getData(3)
// }
// getAlldata();
// async function getProducts() {
//     try{
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         console.log("✅ Data from API:", data)
//     }
//       catch (error) {
//     console.log("❌ Error:", error);
//   }
// }
// getProducts();
//===========callback function=======
// function register(cb) {
//   setTimeout(() => {
//     console.log("register done!");
//     cb();
//   }, 4000);
// }
// function login(cb) {
//   setTimeout(() => {
//     console.log("login done!");
//     cb();
//   }, 2000);
// }
// function profile() {
//   setTimeout(() => {
//     console.log("profile done!");
//   }, 1000);
// }
// register(function () {
//   login(function () {
//     profile();
//   });
// });
//=====promise====
function register() {
  return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if(success){
       console.log("register done!");
      resolve();
      }
      else{
        reject("❌ Profile failed!")
      }
    }, 4000);
  });
}
function login() {
  return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if(success){
console.log("login done!");
      resolve();
      }else{
        reject("❌ Profile failed!")
      }
      
    }, 2000);
  });
}
function profile() {
  return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if(success){
     console.log("profile done!");
      resolve();
      }else{
        reject("❌ Profile failed!")
      }
      
    }, 1000);
  });
}
register()
  .then(() => login())
  .then(() => profile())
  .catch((err) => console.log(err));
