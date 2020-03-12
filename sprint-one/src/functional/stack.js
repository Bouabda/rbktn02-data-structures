var Stack = function() {
  var someInstance = {};
  var top = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {

    storage[top] =  value;
    top = top + 1;
    return top
  };

  someInstance.pop = function() {

    if  (top >= 1) {
     delete storage[top] ;
     top = top - 1 ;
    }
    return storage[top]
  }

  someInstance.size = function() {
    return top;
  };

  return someInstance;
};
