// try {
//   const a = 12;
//   const b = 0;
//   const z = a / b;
//   if (z === Infinity) {
//     throw new Error("You can't divide by zero");
//   }
//   console.log(x);
// } catch (exception) {
//   console.log("something went wrong : ", exception.message);
// } finally {
//   console.log("This code block will always run.");
// }

// console.log("hello");

// Array.prototype.myMap = function (logicFunc) {
//   const output = [];
//   if (this.length === 0) {
//     throw new Error("Array is empty");
//   }
//   for (let i = 0; i < this.length; i++) {
//     output.push(logicFunc(this[i], i, this));
//   }
//   return output;
// };

// // console.log([].map(() => {}));
// console.log([].myMap((e) => e * 2));
