/* The .reverse() method
const reverseString = function(string) {
    return string
            .split("")
            .reverse()
            .join("");
};
*/

// The loop method
const reverseString = function(string){
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--){
        reversedString += string[i];
    }
    return reversedString;
}
// Do not edit below this line
module.exports = reverseString;
