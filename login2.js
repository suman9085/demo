//====================login page javascript==================
// Signup
const signupForm = document.getElementById("signupForm");
const signupMessage = document.getElementById("signupMessage");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const userData = { email, password };
  localStorage.setItem("user", JSON.stringify(userData));

  signupMessage.textContent = "✅ Signup Successful!";
  signupMessage.style.color = "green";

  setTimeout(() => {
    signupMessage.textContent = "";
  }, 3000);

  console.log("Signup Data:", userData);
  signupForm.reset();
});

// Login
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    storedUser.email === email &&
    storedUser.password === password
  ) {
    loginMessage.textContent = "✅ Login Successful!";
    loginMessage.style.color = "green";
    console.log("Login Success:", storedUser);
  } else {
    loginMessage.textContent = "❌ Invalid Email or Password!";
    loginMessage.style.color = "red";
    console.log("Login Failed");
  }

  setTimeout(() => {
    loginMessage.textContent = "";
  }, 3000);
  loginForm.reset();
});
