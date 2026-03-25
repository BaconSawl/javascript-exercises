const fibonacci = function(num) {
    n = Number(num);
    if (n < 0) {
        return ("OOPS");
    }
    if (n === 0 || n === 1) {
        return n;
    }
    if (n > 1) {
        let current = 1;
        let previous = 0;
        for (let i = 0; i < n - 1; i++){
            let next = current + previous;
            previous = current;
            current = next;
            // console.log("Step", i, "previous =", previous, "current =", current, "next =", next);
        }
        return current;
    }
};

// console.log(fibonacci(6))
// Do not edit below this line
module.exports = fibonacci;
