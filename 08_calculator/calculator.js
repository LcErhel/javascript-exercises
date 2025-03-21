const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let result = 0;
  arr.forEach(element => {
    result += element;
  });
  return result;
};

const multiply = function(arr) {
  let result = 0;
  arr.forEach(element => {
    if(result == 0) {
      result = element;
      return
    }
    result *= element;
  });
  return result;
};

const power = function(a, b) {
	let result = 0;
  for(let i = 0; i < b; i++) {
    if(result == 0) {
      result = a;
      continue;
    }
    result *= a;
  }
  return result;
};

const factorial = function(initial) {
  if(initial == 0) {
    return 1;
  }

  let result = 0;
  for(let i = initial; i > 0; i--) {
    if(result == 0) {
      result = initial;
      continue;
    }
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
