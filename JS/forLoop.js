var i = 0,
  j,
  c = 128512;

// for (i = 128512; i <= 128567; i++) {
//   document.write(`<h1>&#${i}; - ${i}</h1>`);
// }

// for (i = 128512; i <= 128536; i++) {
//   document.write(`<span>&#${i};</span>`);
//   ++c;
//   if (c % 5 == 0) document.write(`<br>`);
// }

// for (i = 1; i <= 70; i++) {
//   document.write(`<span>&#${++c};</span>`);
//   if (i % 10 == 0) document.write(`<br>`);
// }

for (i = 1; i <= 5; i++) {
  for (j = 1; j <= 5; j++) {
    document.write(`<span>&#${++c};</span>`);
  }
  document.write(`<br>`);
}

for (i = 1; i <= 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
}

// while (i <= 10) {
//   if (i == 5) break;
//   console.log(i++);
// }

// do {
//   console.log(i++);
// } while (i <= 10);

// if (true) {
//   console.log("Hello");
//   console.log("Hello");
//   console.log("Hello");
//   console.log("Hello");
//   console.log("Hello");
//   console.log("Hello");
// }

// console.log(i);
