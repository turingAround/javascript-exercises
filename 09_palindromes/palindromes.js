const palindromes = function(str) {
    // Convert string to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Loop through the string, comparing characters from start and end
    for (let i = 0; i < cleanStr.length / 2; i++) {
        // Compare characters from start and end moving inward
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
