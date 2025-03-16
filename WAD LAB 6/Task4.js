let softwareHouses = ["ABC", "DEF", "JHI", "JKL", "MNO"];
console.log(" Array:", softwareHouses);

// 1. Remove the first element
softwareHouses.shift();
console.log("After Removing First Name:", softwareHouses);

// 2. Remove the element at index 2(Middle) and replace it with a new name
softwareHouses.splice(2, 1, "XYZ");
console.log("After Replacing Middle Index Element:", softwareHouses);

// 3. Add a new name at the end
softwareHouses.push("NextTECH");
console.log("After Adding Name at the End:", softwareHouses);
