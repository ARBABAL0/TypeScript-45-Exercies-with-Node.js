let userName = ["Arbab", "Shahbaz", "Admin", "Ahsan", "Zain"]

userName = []

if (userName.length === 0) {
    console.log(" Your Array is Empty We need to find some users!")
}else{
    // Using ForEach Loop on Array
    userName.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, than you for a logging in again. `)
    }
}) 
}