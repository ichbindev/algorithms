/*
    There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

    Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

    Note that multiple kids can have the greatest number of candies.
*/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const mostCandies = Math.max(...candies);
  const cutoff = mostCandies - extraCandies;
  const greatestNumberOfCandies = new Array(candies.length).fill(false);
  for (let i = 0; i < greatestNumberOfCandies.length; i++) {
      greatestNumberOfCandies[i] = candies[i] >= cutoff;
  }
  return greatestNumberOfCandies;
};