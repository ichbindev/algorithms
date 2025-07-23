/*
Given an array of integers temperatures representing daily temperatures, 
calculate how many days you have to wait until a warmer temperature. 
If there is no future day for which this is possible, put 0 instead.
*/

class Temperature {
  constructor(temp, day) {
    this.temp = temp;
    this.day = day;
  }
}

class Solution {
  dailyTemperatures(temperatures) {
    const stack = []; // monotonically decreasing stack
    const answer = new Array(temperatures.length).fill(0);
    for (const [day, temp] of temperatures.entries()) {
      while (temp > stack[stack.length - 1]?.temp) {
        const oldTemp = stack.pop();
        for (let {day: oldDay} = oldTemp; oldDay < day; oldDay++) {
          if (!answer[oldDay]) answer[oldDay] = day - oldDay;
        }
      } 
      stack.push(new Temperature(temp, day));
    }
    return answer;
  }
}