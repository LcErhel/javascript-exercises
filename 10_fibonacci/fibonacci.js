const fibonacci = function(th) {
    if(th < 0) {
        return "OOPS";
    } else if (th == 0) {
        return 0;
    } else if(th == 1 || th == 2) {
        return 1;
    } else if(th == 3) {
        return 2;
    }

    let first = 1;
    let second = 2;
    let third = 1;
    for(let i = 3; i < th; i++) {
        if(i % 2 == 0) {
            second += third;
            first = second - third;
        } else {
            second += first;
            third = second - first;
        }
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
