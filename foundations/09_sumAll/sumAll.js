const sumAll = function(num1, num2) {
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    let totalSum = 0;

    /*
    if (Number.isInteger(num1) === false || Number.isInteger(num2) === false || num1 < 0 || num2 < 0){
        return "ERROR";
    }
    */ 
    // Slightly better way to do validation
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0){
        return "ERROR";
    }
    else {
        for (let i = min ; i <= max; i++){
            totalSum += i;
        }
    // console.log(totalSum);
        return totalSum;
    }


};

sumAll(-10,4);
// Do not edit below this line
module.exports = sumAll;
