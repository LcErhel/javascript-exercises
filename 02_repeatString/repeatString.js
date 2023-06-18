const repeatString = function(phrase, repeatNumber) {

    if (repeatNumber < 0) {
        return "ERROR";
    }

    let result = "";

    while (repeatNumber > 0) {
        result += phrase;
        repeatNumber--;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
