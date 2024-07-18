// Define the function to show magicians names 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through  .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return " The Great ".concat(name); });
}
// Define an array of magicians name 
var magician_names = ["Arbab", "Ali", "Sonu"];
// Call make_great function to modify magicians names
var great_magicins = make_great(magician_names);
// Call show magicians that show modified list of magicians 
show_magicians(great_magicins);
// Making a copy of original array through .Slice() functions 
var copy_magicians_name = magician_names.slice();
// Modify the copied array to includes "The Great " with their names 
var copy_great_magicians = make_great(copy_magicians_name);
// show both arrays original and copied 
// Original 
console.log("Original Array\n");
show_magicians(magician_names);
// copied 
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
