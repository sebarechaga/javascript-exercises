const findTheOldest = function(people) {
    let oldest = -1;
    let result = people[0];
    for (let person of people) {
        if (person.yearOfDeath === undefined) person.yearOfDeath = 2024;
        if (person.yearOfDeath - person.yearOfBirth > oldest) {
            oldest = (person.yearOfDeath - person.yearOfBirth);
            result = person;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
