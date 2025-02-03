const removeFromArray = function(...args) {
    const array = args[0];  // First argument is the array
    const elementsToRemove = args.slice(1);  // Rest of the arguments are elements to remove
    
    return array.filter(item => !elementsToRemove.includes(item));
  };
  
// Do not edit below this line
module.exports = removeFromArray;
