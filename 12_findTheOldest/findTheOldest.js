const findTheOldest = function(arr) {
    arr.forEach(element => {
        if(element.yearOfDeath === undefined) {
            let currentYear = new Date().getFullYear();
            element.age = currentYear - element.yearOfBirth;
        } else {
            element.age = element.yearOfDeath - element.yearOfBirth;
        }
    });
    arr.sort(compareNumbers);
    return arr.at(-1);
};

function compareNumbers(a, b) {
    return a.age - b.age;
}

// Do not edit below this line
module.exports = findTheOldest;
