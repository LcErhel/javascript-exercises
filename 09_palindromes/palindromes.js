const palindromes = function (initString) {
    let result = null;
    let current = reverse(initString).toLowerCase();
    let modified = removeSpecialSymbols(initString).toLowerCase();

    if (current === modified) {
        result = true;
    } else {
        result = false;
    }
    return result;
};

function reverse(init) {
    let modified = removeSpecialSymbols(init);
    let result = modified.split("").reverse().join("");
    return result;
}

function removeSpecialSymbols(init) {
    result = init.replace(/[^a-zA-Z0-9]/g, "")
    return result;
}

// Do not edit below this line
module.exports = palindromes;
