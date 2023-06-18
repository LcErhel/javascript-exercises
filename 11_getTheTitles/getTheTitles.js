const getTheTitles = function(arr) {
    let result = [];
    arr.forEach(element => {
        result.push(element.title);
    });
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
