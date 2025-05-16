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

  // sort dishes and find intial sweet & savory dish closest to 0
  dishes.sort((a, b) => a - b);
  let savoryIdx = dishes.findIndex(x => x > 0);
  let sweetIdx = savoryIdx - 1;
  let bestDish = [0, 0];
  let bestScore = Number.MAX_SAFE_INTEGER;

  // two pointer, middle out approach
  // stop if one goes out of bounds
  while (sweetIdx >= 0 && savoryIdx < dishes.length) {
    const currentProfile = dishes[sweetIdx] + dishes[savoryIdx];
    
    if (currentProfile <= target) {
      const currentScore = target - currentProfile;
      if (currentScore < bestScore) {
        bestDish = [dishes[sweetIdx], dishes[savoryIdx]];
        bestScore = currentScore;
      }
      savoryIdx++;
    } else {
      sweetIdx--;
    }
  }

  return bestDish;
}

// Do not edit the line below.
exports.sweetAndSavory = sweetAndSavory;
