const fibonacci = function(init) {
    if (init < 0) {
        return "OOPS";
    }
    if (init == 1) {
        return 1;
    }

    result = 0;
    first = 0;
    second = 1;
    for (let i = 1; i < +init; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
