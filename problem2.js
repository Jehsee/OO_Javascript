// Problem #2
function Car(make, model, transmission, color, has_leather) {
  this.make = make
  this.model = model
  this.transmission = transmission
  this.color = color
  this.has_leather = has_leather
}

var my_car = new Car("Acura", "TL type-S", "manual", "black", "yes it has leather")

Car.prototype.full_description = function() {
    return "This car is a " + this.make + " " + this.model + " with " + this.transmission + " transmission. The color is " + this.color + " and it is " + this.has_leather + " that this car has leather."
  }

function listProperties(car) {
  for(var key in car) {
    if (typeof car[key] != "function") {
      console.log(car[key])
    }
  }
  // console.log(car.full_description())
}

listProperties(my_car)