var Stack = function() {
  var someInstance = {};
  someInstance.push ;
  someInstance.pop ;
  someInstance.size ;
  someInstance.last = 0;
  someInstance.storage = {};
  extend (someInstance , Stack.stackMethods ) ;

  return someInstance ;
  };

  var extend = function (to , from ) {
    for (var key in from){
      to[key]= from[key] ;
    }
  };

  Stack.stackMethods = {};

  Stack.stackMethods.push = function (value) {
    this.storage[this.last] = value;
    this.last = this.last + 1;
    return this.last
  }

  Stack.stackMethods.pop = function() {
    var deletedValue = this.storage[this.last]
    if(this.last >= 1) {
      delete this.storage[this.last] ;
      this.last = this.last -1 ;
    }
    return deletedValue ;
  }

  Stack.stackMethods.size = function() {
    return this.last ;
  }

