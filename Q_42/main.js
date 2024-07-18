// Define the function to show magicians names 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return " The Great ".concat(name); });
}
// Define an array of magicians name 
var magician_names = ["Arbab", "Ali", "Sonu"];
var great_magicins = make_great(magician_names);
show_magicians(great_magicins);
