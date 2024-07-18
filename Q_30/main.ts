// Creating a Array
let useName = ["Arbab", "Shahbaz", "Ahsan", "Admin", "Zain"];

// Using ForEach Loop on Array
useName.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, than you for a logging in again. `)
    }
}) 