const array1 = [2, 5, 7, 8, 9, 10];
const array2 = [3, 67, 8, 3, 6];

function double(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i] * 2);
  }
  return output;
}

function triple(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i] * 3);
  }
  return output;
}

function Quadruple(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i] * 4);
  }
  return output;
}

// console.log(double(array1));
// console.log(double(array2));

// console.log(
//   array1.map(function (element, index, array) {
//     console.log(element, "element");
//     console.log(index, "index");
//     console.log(array, "array\n");
//     return element * 2;
//   })
// );

console.log(array1.map((element) => element * 2));
// console.log(array1.map((element) => element * 3));
// console.log(array1.map((element) => element * 4));

// creating an hof

function map(logicFunc, array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(logicFunc(array[i], i, array));
  }
  return output;
}

// console.log(
//   map(function (element, index, array) {
//     console.log(element, "element");
//     console.log(index, "index");
//     console.log(array, "array\n");
//     return element * 2;
//   }, array1)
// );

// console.log(map((element) => element * 2, array1));
// console.log(map((element) => element * 2, array1));
// console.log(map((element) => element * 3, array1));
// console.log(map((element) => element * 4, array1));
// console.log(map((element) => element * 5, array1));
// console.log(array1.map((element) => element * 6));

// console.log(triple(array1));
// console.log(triple(array2));
// console.log(Quadruple(array1));
// console.log(Quadruple(array2));

// console.log(array1.__proto__);
// console.log(Array.prototype);

// console.log(Array.prototype === array1.__proto__);
// console.log(Array.prototype === array2.__proto__);

// console.log(array1.__proto__.__proto__);
// console.log(Object.prototype);
// console.log(Object.prototype === array1.__proto__.__proto__);

// console.log(array1.__proto__.__proto__.__proto__);
// console.log(Object.prototype);
// console.log(Object.prototype === array1.__proto__.__proto__);

// Array.prototype.myMap = function (logicFunc) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logicFunc(this[i], i, this));
//   }
//   return output;
// };
