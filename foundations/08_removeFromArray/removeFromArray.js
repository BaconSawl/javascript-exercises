const removeFromArray = function(arr, ...args) {
    let result = [];

    for (let i = 0; i < arr.length; i++){
        let matchFound = false;
        for (let j = 0; j < args.length; j++){
            if (arr[i] === args[j]){
                matchFound = true;
                break;
            }
        }
        if (matchFound == false){
            result.push(arr[i]);
        }

    }
    return result;
};

/*
console.log("Test 1: ", removeFromArray([1,2,3,4], 2));
console.log("Test 2: ", removeFromArray([1,2,3,4], 2,3));
console.log("Test 3: ", removeFromArray([1, 2, 2, 3], 2));
console.log("Test 4: ", removeFromArray([1, 2, 3, 4], 7, "tacos"));
console.log("Test 5: ", removeFromArray([1, 2, 3, 4], 7, 2));
console.log("Test 6: ", removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));
console.log("Test 7: ", removeFromArray(["hey", 2, 3, "ho"], "hey", 3));
console.log("Test 8: ", removeFromArray([1, 2, 3], "1", 3))
*/

// Do not edit below this line
module.exports = removeFromArray;
