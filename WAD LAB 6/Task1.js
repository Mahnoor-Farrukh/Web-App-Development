var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var even = [];

for (var num of numbers) {
    if (num % 2 === 0) {
        even.push(num);
    }
}

console.log("Even numbers:", even);
