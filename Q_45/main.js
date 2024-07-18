// Define a dunction to create a car object with optional  option... 
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // initilize a car object with manufecturer and model 
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Calli the function to crete a car object 
var my_car = create_car("Toyota", "corolla", "color: Black", "sunroof: True");
// Print the Variable to ensure  all the informetion is stored correctly in the r object
console.log(my_car);
