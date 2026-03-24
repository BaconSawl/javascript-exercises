const palindromes = function (s) {
    const newString = s.replace(/[^0-9a-z-A-Z]/g, "").toLowerCase();
    const reversedString = newString.split("").reverse().join("");
    return (newString == reversedString);
};

/*
function pld(s) {
    newString = s.replace(/[^0-9a-z-A-Z ]/g, "").replaceAll(" ", "").toLowerCase();
    const reversedString = newString.split("").reverse().join("");
    console.log(reversedString);
    return (s === reversedString);
}

pld("Racecar");
*/
// Do not edit below this line
module.exports = palindromes;
