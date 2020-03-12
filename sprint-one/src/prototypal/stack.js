var Stack = function() {
 var someInstance = Object.create(stackMethods);
 someInstance.top = 0;
 someInstance.storage = {};
  return someInstance
};


stackMethods = {};

stackMethods.push = function(value) {
this.storage[this.top] = value;
this.top = this.top + 1
}

stackMethods.pop = function() {
 var deletedValue=this.storage[this.top-1];
  if (this.top > 0) {
     delete this.storage[this.top-1] ;
     this.top = this.top - 1;
     return deletedValue ;
  }
}
stackMethods.size = function() {
  return this.top
}


