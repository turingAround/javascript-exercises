const fibonacci = function(n) {
  // Handle invalid inputs
  if (n < 0) return "OOPS, TRY AGAIN WITH A POSITIVE NUMBER";
  if (n === 0) return 0;
  
  // Initialize first two numbers
  let prev = 0;
  let current = 1;
  
  // Calculate Fibonacci number at position n
  for (let i = 1; i < n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  
  return current;
};


// Do not edit below this line
module.exports = fibonacci;
