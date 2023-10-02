const findTheOldest = function (people) {
    let oldestPerson;
    let oldestAge = 0;
    let curYear = new Date().getFullYear();
    for (let i = 0; i < people.length; i++) {
        birthYear = people[i].yearOfBirth;
        deathYear = people[i].yearOfDeath == undefined ? curYear : people[i].yearOfDeath;
        if (deathYear - birthYear > oldestAge) {
            oldestAge = deathYear - birthYear;
            oldestPerson = people[i];
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
