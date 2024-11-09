// const img = document.querySelector("img");
// console.log(img);

// const on = "https://www.w3schools.com/js/pic_bulbon.gif";
// const off = "https://www.w3schools.com/js/pic_bulboff.gif";

// function switchOn() {
//   const img = document.querySelector("img");

//   img.src = on;
//   console.log("The light is now on.");
// }
// function switchOff() {
//   const img = document.querySelector("img");

//   img.src = off;
//   console.log("The light is now off.");
// }

// function printScreen() {
//   // window.print()
//   print();
// }

// setTimeout(() => {
//   console.log("i am called after 5 seconds🌝🤞");
// }, 5000);

// setInterval(() => {
//   console.log("i am called every 5 seconds🌝🤞");
// }, 5000);

const id = setInterval(() => {
  const date = new Date();
  console.log(date.getHours() - 12, date.getMinutes(), date.getSeconds());
}, 1000);

console.log(id);

function clearTime() {
  clearInterval(id);
}
