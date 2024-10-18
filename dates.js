var date = new Date();

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toUTCString());

// Date Get methods
console.log("Year: " + date.getFullYear());
console.log("Month " + date.getMonth());
console.log("Date " + date.getDate());
console.log("Date " + date.getDay());

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = months[date.getMonth()];

console.log(month);

// Set Methods
date.setFullYear(2021);
console.log(date);
