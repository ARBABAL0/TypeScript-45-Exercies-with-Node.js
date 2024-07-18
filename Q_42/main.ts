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