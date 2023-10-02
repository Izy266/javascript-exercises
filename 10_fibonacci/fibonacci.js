const fibonacci = function() {
    lim = arguments[0];
    if (lim < 0) return "OOPS";
    if (lim < 3) return 1; 
    if (lim == 0) return 0;

    let prevNum = 1;
    let curNum = 1;
    for (let i = 2; i < lim; i++) {
        let num = curNum
        curNum += prevNum;
        prevNum = num;
    }
    return curNum;
};

console.log(fibonacci(-25))

// Do not edit below this line
module.exports = fibonacci;
