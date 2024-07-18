// Define a dunction to create a car object with optional  option... 
function create_car(manufacturer, model, ...options){
    // initilize a car object with manufecturer and model 
let car = {
    manufacturer: manufacturer,
    model: model
};
  
// Add additional options to the car object
options.forEach(option => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
});

  return car;

}
// Calli the function to crete a car object 
let my_car = create_car("Toyota", "corolla", "color: Black", "sunroof: True");

// Print the Variable to ensure  all the informetion is stored correctly in the r object
console.log(my_car)