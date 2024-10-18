// Home made iterable
function myNumbers() {
  let n = 0;
  return {
    next: function () {
      n += 10;
      return { value: n, done: false };
    },
  };
}

// Create the iterable:

const n = myNumbers();
n.next();
n.next();
n.next();
n.next();
console.log(n.next().value);
//This home made does not support for...of

// Using the Symbol.iterator

// First create the Object
myNewNumber = {};

// Now lets Make it iterable
myNewNumber[Symbol.iterator] = function () {
  let numb = 0;
  done = false;
  return {
    next() {
      numb += 10;
      if (numb == 100) {
        done = true;
      }
      return { value: numb, done: done };
    },
  };
};

let text = "";

for (const num of myNewNumber) {
  console.log(num);
  
}
