/*
Given two lists of intervals, find the intersection 
of these two lists. Each list consists of disjoint 
intervals sorted on their start time.
*/

/*class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}*/

class Solution {
  merge(intervalsA, intervalsB) {
    let results = [],
        aIndex = 0, 
        bIndex = 0;
    while (aIndex < intervalsA.length && 
           bIndex < intervalsB.length) {
      const { start: aStart, end: aEnd } = intervalsA[aIndex];
      const { start: bStart, end: bEnd } = intervalsB[bIndex];
      const isOverlapping = (aStart <= bStart &&
                            bStart <= aEnd) || 
                            (bStart <= aStart &&
                            aStart <= bEnd);
      if (isOverlapping) {
        const start = Math.max(aStart, bStart);
        const end = Math.min(aEnd, bEnd);
        results.push(new Interval(start, end));
      }
      if (aEnd < bEnd) {
        aIndex++;
      } else {
        bIndex++;
      }
    }

    return results;
  }
}
