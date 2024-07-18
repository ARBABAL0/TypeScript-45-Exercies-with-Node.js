// Creating a Guestlist Array 
var guestList = ["Arbab", "Shahbaz", "Zain", "Ahsan"];
// Making Variable for guest who cant come 
var dontCome = guestList[0];
// Print the name of guest who cant come 
console.log(dontCome, "Nhi A Skta");
// Add or Remove Value from Guest List Array
guestList.splice(0, 1, "Zain");
// Message Print for Bigger Table 
console.log("Good News ! We have Found a Bigger Table For Dinner");
// Adding a new value at starting index of array
guestList.unshift("Shazaib");
// Adding a new value at ending inexd of array
guestList.push("Kabir");
// Get a middle index of our  guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new gust to middle index of array 
guestList.splice(middleIndex, 0, "imran khan");
// Print message of Updated List
console.log("Updated list of our Guests");
// Sendding a Invitation message to our guests pne by one with their names  
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", Would you like to Dinner with me")); });
// inform that only two guests can be invited for dinner 
console.log("unfortunately, the new dinner table want arrive on time,i can invite only two Guest to dinner with me");
// using while-loop to remove guest from the array until only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry,".concat(removeGuest, " i cant invite you to Dinner"));
}
// Sending a invitation to the last two guest on the list
console.log("Invitation to the last 2 Guest");
guestList.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ",You are Still invited to dinner")); });
guestList.pop();
guestList.pop();
console.log("empty List", guestList);
