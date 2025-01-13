/*
    You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

    Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  const newFb = [0, ...flowerbed, 0];
  let placements = 0;
  for (let i = 1; i < newFb.length - 1; i ++) {
      if (!(newFb[i - 1] || newFb[i] || newFb[i + 1])) {
          placements++;
          i++;
          if (placements >= n) return true;
      }
  }
  return n <= placements;
};
