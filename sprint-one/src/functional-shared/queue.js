var Queue = function() {
  var someInstance ={};
  someInstance.storage ={};
  someInstance.rear = 0 ;
  someInstance.front = 0 ;
  _.extend(someInstance,queueMethods)

return someInstance;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};
queueMethods.enqueue = function(value){
    this.storage[this.rear]=value;
    this.rear++;
};
queueMethods.dequeue = function(){
  var deletedvalue = this.storage[this.front];
  if(this.rear>0){
    delete this.storage[this.front];
    this.storage[this.front]=this.storage[this.rear-1];
    delete this.storage[this.rear-1];
    this.rear--;
    return deletedvalue;
  }

};
queueMethods.size =function(){
  return this.rear-this.front;
}

