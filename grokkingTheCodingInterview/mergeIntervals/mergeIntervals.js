/*
Given a list of intervals, merge all the overlapping intervals 
to produce a list that has only mutually exclusive intervals.
*/

/*class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}*/

class Solution {
  merge(intervals) {
    const mergedIntervals = [];
    intervals.sort((a, b) => a.start - b.start);

    let { start, end } = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i].start <= end) {
        end = Math.max(end, intervals[i].end);
      } else {
        mergedIntervals.push(new Interval(start, end));
        ({ start, end } = intervals[i]);
      }
    }
    mergedIntervals.push(new Interval(start, end));
    
    return mergedIntervals;
  }
}
