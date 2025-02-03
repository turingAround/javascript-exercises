const leapYears = function(year) {
  // First check if year is divisible by 4
  if (year % 4 === 0) {
    // If year is divisible by 100
    if (year % 100 === 0) {
      // It must also be divisible by 400 to be a leap year
      return year % 400 === 0;
    }
    // If not divisible by 100, it is a leap year
    return true;
  }
  // If not divisible by 4, it's not a leap year
  return false;
};

// Do not edit below this line
module.exports = leapYears;
