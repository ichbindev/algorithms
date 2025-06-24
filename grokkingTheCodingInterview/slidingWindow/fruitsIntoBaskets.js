/*
You are visiting a farm to collect fruits. The farm has a single 
row of fruit trees. You will be given two baskets, and your goal is to 
pick as many fruits as possible to be placed in the given baskets.

You will be given an array of characters where each character represents a 
fruit tree. The farm has following restrictions:

Each basket can have only one type of fruit. There is no limit to how many 
fruit a basket can hold.

You can start with any tree, but you can’t skip a tree once you have started.

You will pick exactly one fruit from every tree until you cannot, i.e., you will stop 
when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.
*/

class Solution {
  findLength(fruits) {
    let maxLength = 0,
        start = 0,
        baskets = {};

    for (const [end, fruit] of fruits.entries()) {
      // grow window
      baskets[fruit] = baskets[fruit] ? baskets[fruit] + 1 : 1;

      // shrink window
      while (Object.entries(baskets).length > 2) {
        const startFruit = fruits[start];
        baskets[startFruit] = baskets[startFruit] - 1;
        if (baskets[startFruit] === 0) delete baskets[startFruit];
        start++;
      }

      // check max length
      maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
  }
}
