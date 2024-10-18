// Assign methods
const source = {
  a: 1,
  b: 2,
};
const target = {
  c: 3,
  d: 4,
};
const numbers = Object.assign(target, source);

// console.log(numbers);

// Constructor
let con = source.constructor;
// console.log(con);

// create() method
const person = {
  name: "John",
  age: 32,
  color: "yellow",
};

let man = Object.create(person);
man.firstName = "John";
// console.log(man);

// defineProperties()

const newMan = Object.defineProperties(person, {
  language: { value: "English" },
  year: { value: "2023" },
});

console.log(newMan);

// Object Constructors before ES6
function Person(first, last, age, height) {
  (this.initialName = first),
    (this.nextName = last),
    (this.newAge = age),
    (this.newHeight = height);
}

// creating a new object using the create object
const person4 = new Person("Me", "there", 45, 2.3);
console.log(person4);

// Object constructors with ES6
class Human {
  constructor(color, age) {
    (this.color = color), (this.age = age);
  }
}

let human = new Human("Yellow", 20);
console.log(human);

// Adding a method to the prototype
Human.prototype.displayInfo = function () {
  return `The human is ${this.color} and aged ${this.age}`;
};

console.log(human.displayInfo());
