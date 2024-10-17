const leapYears = function(year) {
    if (!Number.isInteger(year / 4)) {
        return false;
    }
    if (Number.isInteger(year / 100) && !Number.isInteger(year / 400)) {
        return false;
    }
    return true;
};

// Do not edit below this line
module.exports = leapYears;
