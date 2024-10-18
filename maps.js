// Using the new Map() Method

const fruits = new Map([
  ["Mangoes", 500],
  ["Apples", 200],
  ["Banana", 100],
]);

// Using the Set method

const newFruits = new Map();
newFruits.set("Apples", 400);
newFruits.set("Apples", 300);
newFruits.set("Apples", 200);

console.log(newFruits.get("Apples"));

// groupBy method

const otherFruits = [
  { name: "Apples", quantity: 300 },
  { name: "Mangoes", quantity: 150 },
  { name: "Banana", quantity: 200 },
  { name: "Guava", quantity: 50 },
];

function myCallBak() {
  return quantity > 100 ? console.log("Okay") : "Very Low";
}

const result = Map.groupBy(otherFruits, myCallBak);

console.log(result);

