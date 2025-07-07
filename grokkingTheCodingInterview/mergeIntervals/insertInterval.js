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
    // return this.insertAndMerge(intervals, newInterval);
    const insertAfter = intervals.findIndex(x => x.start > newInterval.start);
    if (insertAfter === -1) {
      intervals.push(newInterval);
      return intervals;
    } 
    intervals.splice(insertAfter, 0, newInterval); 

    return this.merge(intervals);
  }

  insertAndMerge(intervals, newInterval) {
    // keep non-overlapping intervals before new interval
    let i = intervals.findIndex(x => x.end >= newInterval.start);
    if (i === -1) return [...intervals, newInterval];
    const merged = intervals.slice(0, i);

    // merge overlapping intervals
    while (i < intervals.length && intervals[i].start <= newInterval.end) {
      newInterval.start = Math.min(intervals[i].start, newInterval.start);
      newInterval.end = Math.max(intervals[i].end, newInterval.end);
      i++;
    }

    // keep non-overlapping intervals after new interval
    return merged.concat([newInterval, ...intervals.slice(i)]);
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
