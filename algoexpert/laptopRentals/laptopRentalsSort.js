function laptopRentals(times) {
  if (!times.length) return 0;
  const startTimes = times.map(a => a[0]).sort((a, b) => a - b);
  const endTimes = times.map(a => a[1]).sort((a, b) => a - b);

  let laptops = 0,
      startIdx = 0, 
      endIdx = 0;

  while (startIdx < times.length) {
    if (startTimes[startIdx] >= endTimes[endIdx]) {
      endIdx++;
      laptops--;
    } 
    startIdx++;
    laptops++;
  }
  return laptops;
}

// Do not edit the line below.
exports.laptopRentals = laptopRentals;
