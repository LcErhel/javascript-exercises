const palindromes = function (initial) {
    let modifiedInitial = initial.toLowerCase().replace(/[!\s,.]/g, "")
    let reversed = modifiedInitial.split("").reverse().join("");
    return reversed == modifiedInitial;
};

// Do not edit below this line
module.exports = palindromes;
