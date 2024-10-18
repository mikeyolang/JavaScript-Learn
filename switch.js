let day;

switch (new Date().getDay()) {
  case 1:
    day = "Monday";
    console.log(day);

  case 3:
    day = "Tuesday";
    console.log(day);
  case 4:
    day = "Wednesday";
    console.log(day);
  case 5:
    day = "Thursday";
    console.log(day);
  case 6:
    day = "Friday";
    console.log(day);
  case 7:
    day = "Saturday";
    console.log(day);

  default:
    break;
}
let day2 = new Date().getDay();
console.log(day2);

let array = ["M", "T", "W", "TH", "F", "Sa", "Su"];
console.log(array[day2-1]);
