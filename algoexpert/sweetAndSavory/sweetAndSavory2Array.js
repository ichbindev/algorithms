/*
  You're hosting an event at a food festival and want to showcase the best
  possible pairing of two dishes from the festival that complement each
  other's flavor profile.

  Each dish has a flavor profile represented by an integer. A negative integer
  means a dish is sweet, while a positive integer means a dish is savory. The
  absolute value of that integer represents the intensity of that flavor. For
  example, a flavor profile of -3 is slightly sweet, one of -10 is extremely
  sweet, one of 2 is mildly savory, and one of 8 is significantly savory.

  You're given an array of these dishes and a target combined flavor profile.
  Write a function that returns the best possible pairing of two dishes (the
  pairing with a total flavor profile that's closest to the target one). Note
  that this pairing must include one sweet and one savory dish. You're also
  concerned about the dish being too savory, so your pairing should never be
  more savory than the target flavor profile.

  All dishes will have a positive or negative flavor profile; there are no
  dishes with a 0 value. For simplicity, you can assume that there will be at
  most one best solution. If there isn't a valid solution, your function
  should return <span>[0, 0]</span>. The returned array should be sorted,
  meaning the sweet dish should always come first.
*/
function sweetAndSavory(dishes, target) {
  const sweetDishes = dishes.filter(x => x < 0).sort((a, b) => b - a);
  const savoryDishes = dishes.filter(x => x > 0).sort((a, b) => a - b);
  let bestScore = Number.MAX_SAFE_INTEGER;
  let bestDish = [0, 0];

  let sweetIdx = 0, savoryIdx = 0;
  while (sweetIdx < sweetDishes.length && savoryIdx < savoryDishes.length) {
    const currentDish = [sweetDishes[sweetIdx], savoryDishes[savoryIdx]]
    const currentSum = currentDish.reduce((a, c) => a + c, 0);
    if (currentSum <= target) {
      const currentScore = target - currentSum;
      if (currentScore < bestScore) {
        bestScore = currentScore;
        bestDish = currentDish;
      }
      savoryIdx++;
    } else {
      sweetIdx++;
    }
  }

  return bestDish;
}

// Do not edit the line below.
exports.sweetAndSavory = sweetAndSavory;
