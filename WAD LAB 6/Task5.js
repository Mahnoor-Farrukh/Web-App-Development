function countVowels(str) {
    let count = 0;

    for (let char of str) {
       
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++; 
        }
    }
    return count; 
}


console.log("No Of Vowels in Mahnoor:",countVowels("Mahnoor")); 
console.log("No Of Vowels in ClOudy:",countVowels("ClOudy"));  
console.log("No Of Vowels in Laptop:",countVowels("Laptop"));     
