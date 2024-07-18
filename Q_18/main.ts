// Making a array Countries and Print its Original Order 
let countriesToVisit: string[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:",countriesToVisit);

//Print the array in Alphabetical order without modifying the Actual Array List 
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//Show that the array is still in its Original order 
console.log("Still in Original Order:", countriesToVisit);

// Print the array in Reversed Order without modifying the Actual array List 
console.log ("Reverse Order:", [...countriesToVisit].reverse());

// Show that the array is still in its Original order 
console.log("Still in Original Order:", countriesToVisit);

// We have changed the Original Array order now 
console.log("Original Array Reversed:", countriesToVisit.reverse());

// Print the array to show that it's back to its original order 
console.log("Back to Original Order", countriesToVisit.reverse());

//Print the array to show that its order has been changed in Alphabetical order now 
console.log("Sorted in Aplhabeticl order:", countriesToVisit.sort());

//We have Changed again the Original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());