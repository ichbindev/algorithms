/*
You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].

Implement the SmallestInfiniteSet class:

SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all 
positive integers.
int popSmallest() Removes and returns the smallest integer contained in the infinite
set.
void addBack(int num) Adds a positive integer num back into the infinite set, if it
is not already in the infinite set.

Constraints:
- 1 <= num <= 1000
- At most 1000 calls will be made in total to popSmallest and addBack.
*/

var SmallestInfiniteSet = function() {
    this.smallest = 1;
    this.heap = new Heap((a, b) => a - b);
    this.addedBack = new Set();
    return this;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if (!this.heap.isEmpty()) {
        const smallest = this.heap.pop();
        this.addedBack.delete(smallest);
        return smallest;
    }
    return this.smallest++;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (num < this.smallest && !this.addedBack.has(num)) {
        this.heap.push(num);
        this.addedBack.add(num);
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */