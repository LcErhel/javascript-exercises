const removeFromArray = function(array, removedValue) {
    let result = array;

    for(let i = 0; i < array.length; i++) {
        if(result[i] == removedValue) {
            result.splice(i, 1);
        }
    }

    console.log(result);
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
