// Problem #1
// This is an object using object literal
var Cars = {
  make: "Acura",
  model: "TL",
  transmission: "manual",
  color: "black",
}

// This is an object using constructor function
function Car(make, model, transmission, color, has_leather) {
  this.make = make
  this.model = model
  this.transmission = transmission
  this.color = color
  this.has_leather = has_leather
}

// Below, we are setting the different attributes of a new model/object that we are creating from the constructor function.
var my_car = new Car("Acura", "TL type-S", "manual", "black", "yes it has leather")
console.log(my_car.make)
console.log(my_car.model)

var moms_car = new Car("Toyota", "Prius", "automatic", "silver", true)
console.log(moms_car.transmission)
console.log(moms_car.color)

// Below is a prototype that can be used to define a attribute or function to an already existing object.
Car.prototype.full_description = function() {
    return "This car is a " + this.make + " " + this.model + " with " + this.transmission + " transmission. The color is " + this.color + " and it is " + this.has_leather + " that this car has leather."
  }
console.log(my_car.full_description())
console.log(moms_car.full_description())


// Problem #2 : Below is a method that will list through the properties of an object.
function listProperties(car) {
  for(var key in car) {
    if (typeof car[key] != "function") {
      console.log(car[key])
    }
  }
  console.log(car.full_description())
}

listProperties(my_car)