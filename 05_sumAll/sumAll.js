const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number" || !Number.isInteger(a + b)) {
        return "ERROR";
    }
    if (a <= b) {
        min = a;
        max = b;
    }
    else {
        min = b;
        max = a;
    }
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
