const removeFromArray = function(arr, ...values) {
    values.sort();

    outer:
    for(let i = 0; i < arr.length; i++) {
        inner:
        for(y = 0; y < values.length; y++) {
            if(arr[i] === values[y]) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
