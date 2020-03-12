class Queue {
constructor() {
    this.rear = 0 ;
    this.front = 0 ;
    this.storage = {};
}
enqueue(value) {
this.storage[this.rear] = value;
this.rear ++
};

dequeue() {
  var deletedValue = this.storage[this.front] ;
    if (this.rear > 0) {
     delete this.storage[this.front] ;
     this.storage[this.front] = this.storage[this.rear-1] ;
     delete this.storage[this.rear-1] ;
     this.rear -- ;
    } return deletedValue ;

}

size () {
  return this.rear - this.front ;
  }
}


