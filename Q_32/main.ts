// Array of Current User
let current_users = ["Arbab", "Ali", "Shahbaz", "Ahsan", "Zain"]

// Array of New Users
let new_users = ["Sonu", "Ahad", "Anas", "Pritam", "Shebi"]

// Loops through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {

    // Maing a condition for username already exist and our_condition Variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Print Different messages using if-Else statements
    if(our_condition) {
        console.log(`Sorry${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is Available`)
    }
})


