// "use strict";

// x = 3.14; // This will cause an error because x is not declared

// console.log(x);
// console.log(window.x);

// const arr = [3, 4, 7, 2, 9];

// // ❌
// // arr = [23, 324, 345];

// arr[0] = arr[2];

// console.log(arr);

// const obj = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   country: "USA",
// };

// ❌
// obj = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   country: "USA",
// };

// console.log(obj);

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [...arr1, ...arr2];

// for (let i of arr1) arr3.push(i);
// for (let i of arr2) arr3.push(i);

// [a, b, , d] = arr3;
// const [a, b, ...rest] = arr3;

// console.log(a);
// console.log(b);
// console.log(rest);
// console.log(d);
// console.log(arr3);

const address = {
  street: "123 Main St",
  city: "New York",
  country: "USA",
};

const skills = ["HTML", "CSS", "JS"];

const person = {
  name: "John",
  age: 30,
  address,
  skills,
};

// person.address = address;
// person["street"] = address["street"];
// person["city"] = address["city"];
// person["country"] = address["country"];

// for (let i in address) person[i] = address[i];

console.log(person);

const { name, age, address: adrs, lcc = 0 } = person;

const { city } = address;

console.log(name);
console.log(age);
console.log(adrs);

// lcc = 4;

console.log(lcc);
console.log(person.address.city);
console.log(address.city);
console.log(city);
