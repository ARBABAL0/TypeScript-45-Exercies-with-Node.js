let guestList = ["Arbab", "Ahsan", "Shahbaz", "Sonu","Zain"];

let dontCome = guestList[0];

console.log(dontCome, "nahi a skta");

guestList.splice(0, 1, "Anas");

guestList.forEach(guest => console.log(`Salam ${guest},would you like to Dinner with me?`));

