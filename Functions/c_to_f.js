"use strict";

function convertFtoC(celsius) {
  let fahrenheit;

  fahrenheit = celsius * (9 / 5) + 32;

  return fahrenheit;
}

let input = 100;
let output = convertFtoC(input);
console.log(output);

console.log(convertFtoC(45));
console.log(convertFtoC(19));
console.log(convertFtoC(0));
console.log(convertFtoC(-7));
console.log(convertFtoC(-40));
