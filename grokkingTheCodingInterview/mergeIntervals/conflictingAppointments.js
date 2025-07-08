/*
Given an array of intervals representing ‘N’ appointments, 
find out if a person can attend all the appointments.
*/

/*class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}*/

class Solution {
  canAttendAllAppointments(intervals) {
    // sort by start time
    intervals.sort((a, b) => a.start - b.start);

    for (let i = 0; i < intervals.length - 1; i++) {
      const current = intervals[i],
            next = intervals[i + 1];

      // if the next appointment starts before the current one ends
      // then you have conflicting appointments
      if (current.end > next.start) {
        return false;
      }
    }
    return true;
  }
}
