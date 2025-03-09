const reverseString = function(inputString) {
    let letters = inputString.split("");
    let result = "";

    for(let i = inputString.length; i > 0; i--) {
        let x = i - 1;
        result += letters[x];
    }

    return result;
    
};

// Do not edit below this line
module.exports = reverseString;
