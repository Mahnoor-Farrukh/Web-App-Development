var numbers = [1, 2, 100, 55, 34, 22, 1, 65];

var max = numbers[0]; 
var min = numbers[0]; 

for (var a of numbers) {
    if (a > max) {
        max = a; /*Max will be updated*/
    }
    if (a < min) {
        min = a; /*Min will be updated*/
    }
}

console.log("Maximum:", max);
console.log("Minimum:", min);
