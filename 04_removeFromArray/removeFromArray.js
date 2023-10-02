const removeFromArray = function() {
    let vals = [];
    let list = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        vals.push(arguments[i]);
    }
    for (let i = 0; i < list.length; i++) {
        if (vals.includes(list[i])) {
            list.splice(i, 1);
            i--;
        }
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
