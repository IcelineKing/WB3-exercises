"use strict";

function convertFtoC(Fahrenheit) {
  let celsius;

  celsius = (Fahrenheit - 32) * (5 / 9);

  return celsius;
}

let input = 212;
let output = convertFtoC(input);
console.log(output);

console.log(convertFtoC(90));
console.log(convertFtoC(72));
console.log(convertFtoC(32));
console.log(convertFtoC(0));
console.log(convertFtoC(-40));
