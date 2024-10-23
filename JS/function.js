// greeting("Merwin");

// // function declaration / function statement

// function greeting(name) {
//   if (!name) throw new Error("name is not defined");

//   console.log("Hello", name);
// }

// var a;

// console.log(typeof greeting);
// console.log(greeting);

// function call

// greeting("Merwin");
// greeting("Devesh");
// greeting("Sathish");

// console.log(greeting);

// greeting("Merwin");

// Function Expression

// named function
// var greeting = function greeting(name) {
//   if (!name) throw new Error("name is not defined");

//   console.log("Hello", name);
// };

// anonymous function
// var greeting = function (name) {
//   if (!name) throw new Error("name is not defined");

//   console.log("Hello", name);
// };

// arrow function
// var greeting = (name) => "Hello " + name;

// console.log(greeting);
// console.log(greeting("Merwin"));

// IIFE

// (function (name) {
//   if (!name) throw new Error("name is not defined");

//   console.log("Hello", name);
// })("xyz");

function sum(...rest) {
  let sum = 0;
  for (const i of rest) {
    sum += i;
  }
  return sum;
}

console.log(sum(5, 6));
console.log(sum(5, 6, 6));
console.log(sum(5, 6, 6, 8));
