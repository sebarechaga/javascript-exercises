const repeatString = function(s, num) {
    let result = "";
    for (; num > 0; num--) {
        result += s;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
