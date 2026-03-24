const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((sum, num) => {
    return sum + num;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((num1, num2) => {
    return num1 * num2;
  }, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	let f = 1;
  for (let i = 0; i < num; i++) {
    f += f * i;
  }
  return f;
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
