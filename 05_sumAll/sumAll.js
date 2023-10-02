const sumAll = function() {
    let start = Infinity;
    let end = 0;
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        num = arguments[i];
        if (num < 0 || typeof num !== "number") {
            return "ERROR";
        }
        if (num < start) {
            start = num;
        }
        if (num > end) {
            end = num;
        }
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumAll(123, 1))

// Do not edit below this line
module.exports = sumAll;
