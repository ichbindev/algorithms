/*
Given a set of investment projects with their respective profits, we 
need to find the most profitable projects. We are given an initial 
capital and are allowed to invest only in a fixed number of projects. 
Our goal is to choose projects that give us the maximum profit. Write a 
function that returns the maximum total capital after selecting the most 
profitable projects.

We can start an investment project only when we have the required capital. 
After selecting a project, we can assume that its profit has become our 
capital, and that we have also received our capital back.

Constraints:
- 1 <= numberOfprojects <= 10^5
- 0 <= initialCapital <= 10^9
- n == profits.length
- n == capital.length
- 1 <= n <= 10^5
- 0 <= profits[i] <= 10^4
- 0 <= capital[i] <= 10^9
*/

class Solution {

  findMaximumCapital(capital, profits, numberOfProjects, initialCapital) {
    const available = capital.map(() => true);
    let totalCapital = initialCapital;
    while (numberOfProjects--) {
      const nextProject = this.pickBestProject(capital, profits, 
                                               initialCapital, available);
      if (nextProject === -1) return totalCapital;
      available[nextProject] = false;
      initialCapital += profits[nextProject];
      totalCapital += profits[nextProject];
    }
    return totalCapital;
  }

  pickBestProject(capital, profits, initialCapital, available) {
    let bestProject = -1, bestProfit = -Infinity;
    for (let i = 0; i < capital.length; i++) {
      if (!available[i] || capital[i] > initialCapital) continue;
      if (profits[i] > bestProfit) {
        bestProject = i;
        bestProfit = profits[i];
      }
    }
    return bestProject;
  }
}
