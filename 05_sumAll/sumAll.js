const sumAll = function(first, second) {
    if (typeof first !== "number" || typeof second !== "number") {
        return "ERROR";
    } else if (first < 0 || second < 0) {
        return "ERROR";
    }

    let result = 0;
    let start;
    let end;
    if (first < second) {
        start = first;
        end = second;
    } else if (first > second) {
        start = second;
        end = first;
    }

    for (let i = start; i < end + 1; i++) {
        result += i;
    }
    console.log(result);
    return result;
};

// Do not edit below this line
module.exports = sumAll;
