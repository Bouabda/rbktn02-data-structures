var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {} ;
  this.rear = 0 ;
  this.front = 0 ;
};

Queue.prototype.enqueue = function (value) {
this.storage [this.rear]= value ;
this.rear ++ ;
}

Queue.prototype.dequeue = function () {
 var deletedValue = this.storage[this.front] ;
    if (this.rear > 0) {
     delete this.storage[this.front] ;
     this.storage[this.front] = this.storage[this.rear-1] ;
     delete this.storage[this.rear-1] ;
     this.rear -- ;
    } return deletedValue ;

}

Queue.prototype.size = function () {
     return this.rear-this.front ;
}