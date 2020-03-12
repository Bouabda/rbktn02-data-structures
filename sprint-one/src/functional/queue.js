var Queue = function() {
  var someInstance = {};
  var first =0 ;
  var last = 0 ;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {

    storage[last]= value ;
    last ++
  };

  someInstance.dequeue = function() {
    var temp = storage[first] ;
    if ((last-first)===0){
      return -1 ;
    }
    if (last > 0) {
      delete storage[first] ;
      first++;
    } return temp ;
  };

  someInstance.size = function() {
    return (last-first) ;
  };

  return someInstance;
};
