function sameBsts(arrayOne, arrayTwo) {
  return checkSameBst(arrayOne, arrayTwo, 0, 0, -Infinity, Infinity);
}

function checkSameBst(arr1, arr2, root1, root2, min, max) {
  if (root1 === -1 || root2 === -1) return root1 === root2;
  
  const val = arr1[root1];
  
  if (val !== arr2[root2]) return false;
  
  let left1 = arr1.findIndex((x, i) => i > root1 && x < val && x >= min);
  let left2 = arr2.findIndex((x, i) => i > root2 && x < val && x >= min);
  let right1 = arr1.findIndex((x, i) => i > root1 && x >= val && x < max);
  let right2 = arr2.findIndex((x, i) => i > root2 && x >= val && x < max);
  
  const placeLeft = checkSameBst(arr1, arr2, left1, left2, min, val);
  const placeRight = checkSameBst(arr1, arr2, right1, right2, val, max);
  
  return placeLeft && placeRight;
}

// Do not edit the line below.
exports.sameBsts = sameBsts;
