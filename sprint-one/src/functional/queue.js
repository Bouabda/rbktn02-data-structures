var Queue = function() {
  var someInstance = {};
  var first =0 ;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {

    storage[first]= value ;
    first ++
  };

  someInstance.dequeue = function() {
    var temp = storage[first] ;
    if (first > 0) {
      delete storage[first] ;
      first--;
    } return storage[first] ;
  };

  someInstance.size = function() {
    return first ;
  };

  return someInstance;
};
