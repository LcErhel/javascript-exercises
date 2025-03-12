const sumAll = function(start, end) {
    if(!isInt(start) || !isInt(end)) {
        return "ERROR";
    }
    
    if(start < 0 || end < 0) {
        return "ERROR";
    }

    if(start > end) {
        [start, end] = [end, start];
    }

    let result = 0;
    console.log(result);

    for(let i = start; i <= end; i++) {
        console.log(i);
        result += i;
    }
    return result;
};

function isInt(n) {
    return Number(n) === n && n % 1 === 0;
}

// Do not edit below this line
module.exports = sumAll;
