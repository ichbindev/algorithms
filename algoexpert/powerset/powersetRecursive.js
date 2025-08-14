function powerset(array) {
  return generatePowersets(array, array.length - 1);
}

function generatePowersets(array, idx) {
  if (idx < 0) return [ [] ];

  const nextVal = array[idx];
  const sets = generatePowersets(array, idx - 1);
  const numSets = sets.length;
  for (let i = 0; i < numSets; i++) {
    const newSet = [...sets[i], nextVal];
    sets.push(newSet);
  }
  return sets;
}

// Do not edit the line below.
exports.powerset = powerset;
