/*
  You're given three inputs, all of which are instances of an
  OrgChart class that have a directReports property
  pointing to their direct reports. The first input is the top manager in an
  organizational chart (i.e., the only instance that isn't anybody else's direct
  report), and the other two inputs are reports in the organizational chart. The
  two reports are guaranteed to be distinct.
  Write a function that returns the lowest common manager to the two reports.
*/
function getLowestCommonManager(topManager, reportOne, reportTwo) {
  // find a report that has both in their management chain
  // if you find one, go down the chain recursively until
  // the lowest one is found (the one with no reports who
  // have both in their chain of command)
  for (const report of topManager.directReports) {
    const reportCount = getRelevantReportCount(report, reportOne, reportTwo);
    if (reportCount === 2) {
      return getLowestCommonManager(report, reportOne, reportTwo);
    }
  }
  return topManager;
}

// essentially a DFS of the management tree, gets a count of 
// how many of the target reports are in the managers tree
function getRelevantReportCount(manager, reportOne, reportTwo) {
  const queue = [ manager ];
  let reportCount = 0;
  while (queue.length) {
    const report = queue.pop();
    queue.push(...report.directReports);
    if (report === reportOne || report === reportTwo) {
      reportCount++;
    }
  }
  return reportCount;
}

// This is an input class. Do not edit.
class OrgChart {
  constructor(name) {
    this.name = name;
    this.directReports = [];
  }
}

// Do not edit the line below.
exports.getLowestCommonManager = getLowestCommonManager;
