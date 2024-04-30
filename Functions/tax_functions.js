"use strict";

function getSocSecTax(grossPay) {
  let securityTax;
  securityTax = grossPay * 0.062;
  return securityTax;
}

let input = 500;
let output = getSocSecTax(input);
console.log(output);

function getMedicareTax(grossPay) {
  let MedicareTax;
  MedicareTax = grossPay * 0.145;
  return MedicareTax;
}

input = 500;
output = getMedicareTax(input);
console.log(output);

//function getFederalTax();
