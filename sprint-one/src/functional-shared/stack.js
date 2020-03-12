var Stack = function() {
  var someInstance = {};
  someInstance.last = 0;
  someInstance.storage = {};
  _.extend (someInstance ,stackMethods ) ;

  return someInstance ;
  };

 stackMethods = {};

stackMethods.push = function (value) {
    this.storage[this.last] = value;
    this.last = this.last + 1;
    return this.last
  }

stackMethods.pop = function() {
    var deletedValue = this.storage[this.last-1]
    if(this.last > 0) {
      delete this.storage[this.last-1] ;
      this.last = this.last-1 ;
      return deletedValue ;
    }

  }

stackMethods.size = function() {
    return this.last ;
  }

