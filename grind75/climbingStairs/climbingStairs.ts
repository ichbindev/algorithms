/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/*
Runtime: 66 ms, faster than 93.82% of TypeScript online submissions for Climbing Stairs.
Memory Usage: 43.4 MB, less than 15.41% of TypeScript online submissions for Climbing Stairs.
*/

// dp solution, only need to store 2 previous values
function climbStairs(n: number): number {
  const steps = [1, 1];
  for (let i = 0; i < n - 1; ++i) {
      const total = steps[0] + steps[1];
      steps[0] = steps[1];
      steps[1] = total;
  }
  return steps[1];
};