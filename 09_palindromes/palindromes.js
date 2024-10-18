const palindromes = function (str) {
    str = str.toLowerCase();
    let fwd = "";
    let reverse = "";
    
    for (let i = 0; i < str.length; i++) {
        if (isValid(str.charAt(i))) {
            fwd += (str.charAt(i));
        }
    }
    reverse = reverseString(fwd);
    if (fwd === reverse) {
        return true;
    }
    return false;
};
const reverseString = function (str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += (str.charAt(i));
    }
    return reversed;
}
const isValid = function (char) {
    return ((char >= "a" && char <= "z") || (char >= "0" && char <= "9"));
}

// Do not edit below this line
module.exports = palindromes;
