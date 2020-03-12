class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage={} ;
 this.top = 0 ;
  }
  push(value) {

    this.storage[this.top] = value;
    this.top = this.top + 1;
    return this.top ;
  };

 pop () {
  var deletedValue = this.storage[this.top-1]
      if(this.top > 0) {
        delete this.storage[this.top-1] ;
        this.top --;
        return deletedValue ;
      }
    }

size () {
  return this.top ;
  };

}