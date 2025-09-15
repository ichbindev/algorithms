// O(maxt) time, where maxt is largest end time
// O(maxt) space 
// time and space complexity depend on maxt - mint, not n
// also relies on start and end being ints
function laptopRentals(times) {
  if (times.length === 0) return 0;
  const min = Math.min(...times.map(a => a[0])),
        max = Math.max(...times.map(a => a[1]));
  const used = new Array(max - min + 1).fill(0);
  for (const [start, end] of times) {
    used[start - min]++;
    used[end - min]--;
  }
  let maxUsed = 0;
  used.reduce((a, c) => {
    a += c;
    maxUsed = Math.max(a, maxUsed);
    return a;
  }, 0);
  return maxUsed;
}

// Do not edit the line below.
exports.laptopRentals = laptopRentals;
