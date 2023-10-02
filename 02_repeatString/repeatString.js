const repeatString = function(text, repNum) {
    if (repNum < 0){
        return "ERROR"
    }
    
    repText = ""
    for (let i = 0; i < repNum; i++) {
        repText += text;
    }
    return repText;
};

// Do not edit below this line
module.exports = repeatString;
