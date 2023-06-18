const findTheOldest = function(obj) {
    let currentYear = 2023;
    let result = undefined;
    let temp = [];

    obj.forEach(element => {
        if (element.yearOfDeath == undefined) {
            element.yearOfDeath = currentYear;
        }
        temp.push(element.yearOfDeath - element.yearOfBirth);
    });

    temp = Math.max(...temp);

    obj.forEach(element => {
        if (temp == (element.yearOfDeath - element.yearOfBirth)) {
            result = element;
        }
    });
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
