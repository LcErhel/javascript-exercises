const add = function(a, b) {
  let result = a + b;
  return result;
};

const subtract = function(a, b) {
	let result = a - b;
  return result;

};

const sum = function(theArray) {
  let result = 0;
	for (const value of theArray) {
    result += value;
  }
  return result;
};

const multiply = function(initial, ...theArgs) {
  let result = initial;
  for (const arg of theArgs) {
    result *= arg;
  }
  return result;
};

const power = function(a, b) {
	let result = a ** b;
  return result;
};

const factorial = function(factorialValue) {
	let result = 1
  for (i = factorialValue; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
