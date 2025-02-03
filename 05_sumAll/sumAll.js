const sumAll = function(num1, num2) {
  // Check if inputs are numbers and integers
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return 'ERROR';
  }
  
  // Check if inputs are negative
  if (num1 < 0 || num2 < 0) {
    return 'ERROR';
  }

  // Get min and max to handle cases where num1 is larger than num2
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);
  
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
