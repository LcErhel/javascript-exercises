const palindromes = function (initial) {
    let modifiedInitial = initial.toLowerCase().replace(/[!\s,.]/g, "")
    let reversed = modifiedInitial.split("").reverse().join("");
    if(reversed == modifiedInitial) {
        return true
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
