// Problem #3 :
      var Multiplier = function() {
     //Current value is 1 by default
        var current_val = 1,
     //Starts a function to get current value, which is 1
        this.getCurrentValue = function() {
            this.current_val;
        };
        this.multiply = function(num1) {
     //This is the var that will update the current val
            new_value = num1 * this.current_val;
     //current_value becomes new_value
            this.current_val = new_value;
            return this.current_val;
        };
      };
      var x = new Multiplier();
      console.log(x.multiply(4))
      console.log(x.multiply(4))
      console.log(x.multiply(4))
      console.log(x.multiply(4))
      console.log(x.getCurrentValue())