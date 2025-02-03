const fibonacci = function(n) {
 
   // Convert n to a number and check if it's a valid number
   n = Number(n);
   if (!Number.isInteger(n)) return "OOPS";
   
    // Handle invalid inputs
  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  
  // Initialize first two numbers
  let prev = 1;
  let current = 1;
  
  // Calculate Fibonacci number at position n
  for (let i = 2; i < n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  
  return current;
};


// Do not edit below this line
module.exports = fibonacci;
