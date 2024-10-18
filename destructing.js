const person = {
  firstName: "Mystical",
  secondName: "Man",
  age: 20,
};

// Destructuring

let { firstName, secondName, country = "Kenya" } = person;

console.log(firstName + " " + secondName + " " + country);

// Object Destructurig Alias

let { firstName: name } = person;

console.log(name);

// Destructuring An Array

let array = ["Apple", "Oranges", "Mangoes", "Bananas", "Passion"];

let [fruit1, , fruit3] = array;
console.log(fruit1 + " " + fruit3);

// Array Position Value

let fruits = ({ [0]: fruitA, [1]: fruitC } = array);
console.log(fruitA);
console.log(fruitC);


