"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const discr = b*b - 4*a*c; 

  if(discr===0){
    arr.push(-b/(2*a));
  } else if(discr>0){
    arr.push((-b + Math.sqrt(discr))/(2*a));
    arr.push((-b - Math.sqrt(discr))/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = percent / 100 / 12;
  const loanAmount = amount - contribution;
  const monthlyPayment = loanAmount * 
        (monthlyPercent * Math.pow(1 + monthlyPercent, countMonths)) / 
        (Math.pow(1 + monthlyPercent, countMonths) - 1);
  const totalPayment = monthlyPayment * countMonths;
  
  return Math.round(totalPayment * 100) / 100;
}
