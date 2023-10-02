const reverseString = function(text) {
    revText = ""
    for (let i = text.length - 1; i >= 0; i--) {
        revText += text[i];
    }
    return revText;
};

// Do not edit below this line
module.exports = reverseString;
