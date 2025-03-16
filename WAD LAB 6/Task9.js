var n = prompt("Enter how many numbers you want:");
var numbers = [];

for (let i = 0; i < n; i++) {
    numbers[i] = prompt("Enter number " + (i + 1) + ":"); 
}

console.log(numbers);
