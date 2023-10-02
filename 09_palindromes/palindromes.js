function isAlphaNumeric(letter) {
    letter = letter.toLowerCase();
    ascii = letter.charCodeAt(0);
    if ((ascii >= 97 && ascii <= 122) || (ascii >= 48 && ascii <= 57)) {
        return true;
    }
    return false;
}

const palindromes = function () {
    let phrase = arguments[0];
    let l = 0;
    let r = phrase.length - 1;

    while (l < r) {
        while (!isAlphaNumeric(phrase[l])) {
            l++;
        }
        while (!isAlphaNumeric(phrase[r])) {
            r--;
        }
        if (l < r) {
            if (phrase[l].toLowerCase() != phrase[r].toLowerCase()) {
                return false;
            }
        }
        r--;
        l++;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
