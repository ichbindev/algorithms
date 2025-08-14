function powerset(array) {
  const sets = [[]];
  
  for (const num of array) {
    const numSets = sets.length
    for (let i = 0; i < numSets; i++) {
      sets.push([...sets[i], num]);
    }
  }
  
  return sets;
}

// Do not edit the line below.
exports.powerset = powerset;
