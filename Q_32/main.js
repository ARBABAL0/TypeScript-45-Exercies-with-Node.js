// Array of Current User
var current_users = ["Arbab", "Ali", "Shahbaz", "Ahsan", "Zain"];
// Array of New Users
var new_users = ["Sonu", "Ahad", "Anas", "Pritam", "Shebi"];
// Loops through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // Maing a condition for username already exist and our_condition Variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different messages using if-Else statements
    if (our_condition) {
        console.log("Sorry".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is Available"));
    }
});
