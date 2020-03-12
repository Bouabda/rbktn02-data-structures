var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 this.storage={} ;
 this.top = 0 ;
};


Stack.prototype.push = function(value) {

  this.storage[this.top] = value;
  this.top = this.top + 1;
  return this.top ;
};

Stack.prototype.pop = function() {
var deletedValue = this.storage[this.top-1]
    if(this.top > 0) {
      delete this.storage[this.top-1] ;
      this.top --;
      return deletedValue ;
    }
  }

Stack.prototype.size = function () {
return this.top ;
};

