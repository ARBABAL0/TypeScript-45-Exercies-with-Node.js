// Creating a Array
var useName = ["Arbab", "Shahbaz", "Ahsan", "Admin", "Zain"];
// Using ForEach Loop on Array
useName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", than you for a logging in again. "));
    }
});
