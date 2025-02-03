const add = function(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current, 1);
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
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
