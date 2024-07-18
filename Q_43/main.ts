// Define the function to show magicians names 
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

 // Function to make magicians great through  .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => ` The Great ${name}`);

}

// Define an array of magicians name 
let magician_names = ["Arbab", "Ali", "Sonu"]

// Call make_great function to modify magicians names
let great_magicins = make_great(magician_names);

// Call show magicians that show modified list of magicians 
show_magicians(great_magicins)

// Making a copy of original array through .Slice() functions 

let copy_magicians_name = magician_names.slice()

// Modify the copied array to includes "The Great " with their names 
let copy_great_magicians = make_great(copy_magicians_name);

// show both arrays original and copied 

// Original 
console.log("Original Array\n")
show_magicians(magician_names);

// copied 
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);











