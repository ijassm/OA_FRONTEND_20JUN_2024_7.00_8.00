console.log(window.document);

const head = document.head;
const body = document.body;

// document.getElementsByTagName("title")[0];
// console.log(document.getElementsByClassName("title"));
// console.log(document.getElementById("unique"));
// console.log(document.getElementsByTagName("h1"));

// console.log(document.querySelector("input"));
// console.log(document.querySelectorAll("input")[1]);

// console.log(document.querySelector("input").value);
// console.log(document.querySelectorAll("input")[1]);

const h1 = document.createElement("h1");
const p = document.createElement("p");
const section = document.createElement("section");

section.append(h1, p);

h1.textContent = "Hello, world!";
h1.style.color = "red";

p.textContent =
  "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available";
p.style.color = "blue";
// console.log(h1.style);

// console.log(section);

body.appendChild(section);

// console.log(head);
// console.log(body);
