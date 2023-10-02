const convertToCelsius = function(temp) {
  return (5 * (temp - 32)/9).toFixed(1) * 1;
};

const convertToFahrenheit = function(temp) {
  return (temp * 1.8 + 32).toFixed(1) * 1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
