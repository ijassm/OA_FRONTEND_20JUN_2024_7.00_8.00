// let a = "hello";
// let a = {};

// console.log((a.name = "merwin"));

// console.log(a);
// console.log(a.merwin);

//Primitive type

// let a = "hello";
// let b = a;

// a = "world";

// console.log(a);
// console.log(b);

// How String Interning Works:
// Unique Storage:

// When a string literal is created, the interpreter checks if an identical string is already stored in memory.
// If it is, the interpreter uses the existing memory address instead of creating a new one.
// Efficiency:

// This reduces memory usage since multiple variables can reference the same string value, avoiding duplication.
// It can also improve performance for string comparison, as comparing references (memory addresses) is faster than comparing actual string values.

//Reference type

const a = [1, 2, 3, 4, 5];
const b = a;
const c = [...a]; //new Array(a)
const d = a;
const e = c;

b[0] = d[2];
c[0] = d[3];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
