const doc = document;

// doc.body.className = "center height";
// doc.body.classList.add("center");
// doc.body.classList.add("height");

// doc.body.classList.remove("center");
// doc.body.classList.remove("height");

// doc.body.classList.toggle("center");
// doc.body.classList.remove("height");

// function trigger() {
//   doc.body.classList.toggle("center");
// }

// console.log(doc.querySelector(".increment"));
doc.querySelector(".increment").addEventListener("click", () => {
  console.log("increment clicked");
  let value = Number(doc.querySelector(".value").textContent);
  doc.querySelector(".value").textContent = ++value;
});

doc.querySelector(".decrement").addEventListener("click", () => {
  console.log("decrement clicked");
  let value = Number(doc.querySelector(".value").textContent);
  if (value > 0) doc.querySelector(".value").textContent = --value;
});

doc.querySelector(".reset").addEventListener("click", () => {
  console.log("reset clicked");
  doc.querySelector(".value").textContent = 0;
});
