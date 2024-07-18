// Define Variables 
var mango = "mango";
var uppercaseMango = "MANGO";
var ten = 10;
var twenty = 20;
var fruits = ["Aoole", "Banana", "Orange"];
// Test for equality and inquality with strings 
console.log("is mango is equal to mango?");
console.log(mango == "mango");
console.log("\nIs mangho is not equal to mango");
console.log(mango != "mango");
// Test using lowercase function
console.log("\nIs MANGO is equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLocaleLowerCase() == "mango");
console.log("\nIs MANGO is not equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() != "mango");
// Numerical tests
// equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
// Not equal to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);
// Greater than 
console.log("\nIs ten is greater then zero?");
console.log(ten > 0);
// less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);
// Greater than or Equal to
console.log("\nIs ten is greater or equl to 5?");
console.log(ten >= 5);
// Less than or Equal to
console.log("\nIs twenty is Less than or equl to 10?");
console.log(twenty <= 10);
// Tests using "and" & "or" Operators 
// Using && (and)
console.log("\n twenty is not equal to 10 an dtwenty is greatrer than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 an dtwenty is greatrer than 10");
console.log(twenty != 10 && twenty > 30);
// Using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test Weather an item is include in array
console.log("\nIs Orange include in my Fruits array");
console.log(fruits.includes("Orange"));
// Not Include
console.log("\nIs Orange not include in my Fruits array");
console.log(!fruits.includes("orange"));
