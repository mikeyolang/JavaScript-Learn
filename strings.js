// String Methods
let text = "Hello";
character = text.charCodeAt(0);
console.log(character);
char = text[2];
console.log(char);

// lastIndex off()

let text2 = "Lets locate the 'locate' text";
let index = text2.lastIndexOf("locate", 15);

console.log(index + "Hello");

// Search
console.log(text2.search("locate"));
console.log(text2.search(/locate/));

// match()
let text3 = "The rain in SPAIN stays mainly in the plain";
console.log(text3.match(/ain/));

// String Templates
let text4 = `Hello
There
young
man
`;
console.log(text4);

var amount = 10;
var VAT = 1.2345;

let total = `Total: ${amount * (1 + VAT).toFixed(2)}`;

console.log(total);

// Math method
let x = 4.4;

console.log(Math.round(x));
console.log(Math.ceil(x));
console.log(Math.floor(x));
console.log(Math.trunc(x));
console.log(Math.sign(-4.4));

// Random()
let y = Math.floor(Math.random() * 10);
console.log(y);

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomInteger(10, 4));
