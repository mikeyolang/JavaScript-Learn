const array = ["Bananas", "Apples", "Mangoes"];

// adding new item in the array
const newArray = array.push("Fruits");
console.log(array);
// OR
array[array.length] = "NewFruit";

console.log(array);

// array methods
array.join("*");
console.log(array);

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(first);

// Array Iteration Methods

// For each method
const newNumbers = [45, 52, 60, 73, 24, 36];
newNumbers.forEach(function (newNumber) {
  console.log("The Numbers are " + newNumber);
});

// map function
const posts = [
  {
    id: 1,
    title: "Sample Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 2,
    title: "Sample Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 3,
    title: "Sample Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 4,
    title: "Sample Title 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];

const postIds = posts.map((post) => post.id);
console.log(postIds);
const postSummaries = posts.map(function (post) {
  return {
    id: post.id,
    title: post.title,
    description: post.description
  };
});

console.log(postSummaries);

// flatMap()
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr);


