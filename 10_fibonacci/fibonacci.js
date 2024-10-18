const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n == 1 || n == 2) return 1;
    let sum = 0;
    let minus1 = 1;
    let minus2 = 1;
    for (let i = 0; i < n - 2; i++) {
        sum = (minus1 + minus2);
        minus2 = minus1;
        minus1 = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
