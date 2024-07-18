// Define a function with a rest parameter that accept items arguments representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich");
}

// Call the function 3 times with 3 different number of arguments 
makeSandwich("Chicken", "Chese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "chicken", "chese", "lettuce");