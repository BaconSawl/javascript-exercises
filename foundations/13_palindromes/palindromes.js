const palindromes = function (string) {
    const reversedString = string.split(",").reverse().join("");
    return (string === reversedString);
};

/*
function pld(s) {
    const reversedString = s.split(",").reverse().join("");
    return (s == reversedString);
}

pld("racecar!");
*/
// Do not edit below this line
module.exports = palindromes;
