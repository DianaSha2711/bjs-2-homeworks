"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const d = b*b - 4*a*c; 

  if(d===0){
    arr.push(-b/(2*a));
  }
  else if(d>0){
    arr.push((-b + Math.sqrt(d))/(2*a));
    arr.push((-b - Math.sqrt(d))/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = percent/100;

  return contribution * (P + (P / (Math.pow((1 + P), countMonths) - 1)));
}