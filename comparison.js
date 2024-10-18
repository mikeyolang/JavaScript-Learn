let age = 60;

let voteable = age < 18 ? "Can Vote " : "Too young";

console.log(voteable);

age = Number(age);

if (isNaN(age)) {
  voteable = "Not a Valid Age";
} else {
  voteable = age < 18 ? "Too Young" : "Old Enough";
}

console.log(voteable);
// Nullish coalescing
let name = null;
let text = "Missing";
let result = name ?? text;

console.log(result);

// Optional Chaining Operator
const car = {
  type: "Probox",
  model: "2007",
  color: "White",
};
console.log(car?.name);
