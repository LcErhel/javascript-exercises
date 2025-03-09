const repeatString = function(inputString, mult) {
    let result = "";
    
    if(mult < 0) {
        return "ERROR";
    }

    for(let i = 0; i < mult; i++) {
        result += inputString;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
