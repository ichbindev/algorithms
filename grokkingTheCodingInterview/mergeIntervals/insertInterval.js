/*
Given a list of non-overlapping intervals sorted by 
their start time, insert a given interval at the correct 
position and merge all necessary intervals to produce a 
list that has only mutually exclusive intervals.
*/

/*class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}*/

class Solution {
  insert(intervals, newInterval) {
    const insertIndex = intervals.findIndex(x => x.start > newInterval.start);
    if (insertIndex === -1) {
      intervals.push(newInterval);
      return intervals;
    } else {
      intervals.splice(insertIndex, 0, newInterval); 
    }

    return this.merge(intervals);
  }

  merge(intervals) {
    const merged = [];

    let { start, end } = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i].start <= end) {
        end = Math.max(end, intervals[i].end);
      } else {
        merged.push(new Interval(start, end));
        ({ start, end } = intervals[i]);
      }
    }
    merged.push(new Interval(start, end));
    return merged;
  }
}
