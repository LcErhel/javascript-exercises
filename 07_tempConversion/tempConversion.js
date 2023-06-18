const convertToCelsius = function(initial) {
  result = Number(((initial - 32) * 0.55555555555).toFixed(1));
  console.log(result);
  return result;
};

const convertToFahrenheit = function(initial) {
  result = Number(((initial * 1.8) + 32).toFixed(1));
  console.log(result);
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
