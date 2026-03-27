const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    const getAge = (person) => {
        return person.yearOfDeath ?
        person.yearOfDeath - person.yearOfBirth :
        currentYear - person.yearOfBirth;
        ;
    }

    return arr.reduce((oldest, current) => {
        if (getAge(oldest) > getAge(current)) {
            return oldest;
        } else {
            return current;
        }
    });
};
// Do not edit below this line
module.exports = findTheOldest;
