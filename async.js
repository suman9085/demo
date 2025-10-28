//===========async await=======
function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register done!");
      resolve();
    }, 4000);
  });
}
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login done!");
      resolve();
    }, 2000);
  });
}
function profile() {
  return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) {
        console.log("profile done!");
        resolve();
      } else {
        reject("❌ Login failed!");
      }
    }, 1000);
  });
}
async function auth() {
  try {
    await register();
    await login();
    await profile();
  } catch (error) {
    console.log(error);
  }
}
auth();
