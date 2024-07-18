"use strict";
// Making a Function
function make_shirts(size = "Large", printMessage = " I Love Typescript") {
    console.log(`Creating a ${size} shirts with the ${printMessage} prints on shirt`);
}
// Calling a function
make_shirts();
// Calling  A function
make_shirts();
// Calling a function now with Medium size and default message 
make_shirts("Medium");
// Calling a Function now with s=Small size and also Different Print Message
make_shirts("Small", "I Love JavaScript");
