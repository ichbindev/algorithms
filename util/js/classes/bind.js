// fix the 'this' problem for objects referenced in other objects
// binds 'this' inside an object's methods to the object itself
// aka 'this' in the constructor
Object.getOwnPropertyNames(MinHeap.prototype).forEach((key) => {
  if (key !== 'constructor') {
    this[key] = this[key].bind(this);
  }
});