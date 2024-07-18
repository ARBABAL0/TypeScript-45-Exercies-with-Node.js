var guestList = ["Arbab", "Ahsan", "Shahbaz", "Sonu", "Zain"];
var dontCome = guestList[0];
console.log(dontCome, "nahi a skta");
guestList.splice(0, 1, "Anas");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ",would you like to Dinner with me?")); });
