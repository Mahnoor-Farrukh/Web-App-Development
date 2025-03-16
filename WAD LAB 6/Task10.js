var numbers = [2, 10, 3, 6]; 

var product = numbers.reduce(function (total, a) {
    return total * a;
}, 1); 

console.log("Product of all numbers:", product);
