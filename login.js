//====================login=============
const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // page reload na ho

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = {
    email: email,
    password: password,
  };
  localStorage.setItem("data", JSON.stringify(data));
  // Screen pe message show karo
  message.textContent = "✅ User Data Saved Successfully!";
  message.style.color = "green";

  // Message 3 second (3000ms) me auto hide ho jaye
  setTimeout(() => {
    message.textContent = ""; // message clear
  }, 3000);

  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Complete Data Object:", data);
  // form clear karne ke liye
  form.reset();
});
