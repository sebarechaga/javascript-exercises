const reverseString = function(s) {
    let result = "";
    for (let i = 1; i <= s.length; i++ ) {
        result += s.charAt(s.length - i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
