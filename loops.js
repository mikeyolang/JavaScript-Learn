// var i = 5;

// for (var i = 0; i < 10; i++) {
//   console.log("Hello" + i);
// }

// console.log(i);

// let a = 5;
// for (let a = 0; a < 10; a++) {
//   console.log(a);
// }
// console.log(a);

// For/in Loop

const person = {
  fname: "Mystic",
  age: 30,
  color: "White",
  lname: "Man",
};

let text = " ";
for (let x in person) {
  console.log(x);

  console.log((text += person[x] + " "));
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let txt = " ";
for (let y in numbers) {
  console.log(`Current value of Y =  ${y}`);
  console.log((txt += numbers[y] + " "));
}

let text2 = "";
numbers.forEach(myFunction);
function myFunction(value) {
  console.log(`Current New Text = ${(text2 += value)}`);
}

// For/of Loops
const cars = ["Volvo", "BMW", "Mercedese", "Audi"];

let text3 = " ";
for (let x of cars) {
  console.log(`The Loop: ${(text3 += x)}`);
}

// ITERABLES

// Iterating over an String
const name = "Michael";

for (const x of name) {
  console.log(x);
}

// Iterating over a Map

const fruits = new Map([
  ["apples", 500],
  ["Mangoes", 500],
  ["Banana", 500],
]);

for (const x of fruits) {
  console.log(x);
}
