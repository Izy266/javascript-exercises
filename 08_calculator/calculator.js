const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function() {
  if (arguments[0].length == 0) {
    return 0;
  }
  result = arguments[0][0];
	for (let i = 1; i < arguments[0].length; i++) {
    result += arguments[0][i];
  }
  return result;
};

const multiply = function() {
  let nums = arguments[0];
  result = 1;
  for (let i = 0; i < nums.length; i++) {
    result *= nums[i];
  }
  return result;
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
	num = arguments[0];
  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }
  return num;
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
