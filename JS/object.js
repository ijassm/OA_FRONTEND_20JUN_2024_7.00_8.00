// let student = new Object({
//   name: "xyz",
//   age: 20,
//   registerNumber: 15465,
// });

// let student = {
//   firstName: "Aravind",
//   lastName: "Chakkaravarthy",
//   age: 20,
//   registerNumber: 15465,
//   skills: ["HTML", "CSS", "JS"],
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(typeof student);
// console.log(student);

// access

// console.log(student["firstName"]);
// console.log(student["lastName"]);
// console.log(student["skills"]);

// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student.skills);

// for (let i in student) console.log(student[i]);

// get fullName

// let fullName = student.firstName + " " + student.lastName;

// console.log(fullName);

// access function inside object

// console.log(student.fullName());

// collection of objects(student)

let students = [
  {
    firstName: "Aravind",
    lastName: "Chakkaravarthy",
    age: 20,
    registerNumber: 15465,
    skills: ["HTML", "CSS", "JS"],
  },
  {
    firstName: "Merwin",
    lastName: "J",
    age: 18,
    registerNumber: 15466,
    skills: ["Python", "Django", "Flask"],
  },
];

// console.log(students);
// console.log(students.length);
// console.log(typeof students);

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]["age"]);
// }
