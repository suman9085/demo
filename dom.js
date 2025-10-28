//========== function==========
// function suman() {
//   console.log("this is a message fun!");
// }
// suman();

// const { createContext, createElement } = require("react");

//=============== dom ====================
// let div2 = document.getElementById("test");
// function add() {
//   let div = document.createElement("div");
//   let h1 = document.createElement("h1");
//   div.textContent = "hello world";
//   div.appendChild(h1);
//   div2.appendChild(div);
//   div.setAttribute("style", "color: red; background: yellow; font-size: 20px;");
//   console.log(div);
// }
// add();
// let dom2 = document.getElementById("test2");
// // let dom2 = document.getElementById("test2");

// function suman() {
//   let dom = document.createElement("div");
//   dom.textContent = "Welcome to JavaScript DOM";
//   dom.setAttribute("style", "color: green; font-size: 20px;");
//   dom2.appendChild(dom);
//   console.log(dom);
// }
let dom2 = document.getElementById("test3");
function pract() {
  let ul = document.createElement("ul");

  // Apple li
  let li1 = document.createElement("li");
  li1.textContent = "Apple";
  li1.style.color = "red";

  // Banana li
  let li2 = document.createElement("li");
  li2.textContent = "Banana";
  li2.style.color = "yellow";

  // Grapes li
  let li3 = document.createElement("li");
  li3.textContent = "Grapes";
  li3.style.color = "purple";

  // sabko ul ke andar daal diya
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  dom2.appendChild(ul);
  console.log(ul);
}
