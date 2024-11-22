/*
  You recently started freelance software development and have been offered
  a variety of job opportunities. Each job has a deadline, meaning there is no
  value in completing the work after the deadline. Additionally, each job
  has an associated payment representing the profit for completing that job.
  Given this information, write a function that returns the maximum profit that
  can be obtained in a 7-day period.

  Each job will take 1 full day to complete, and the deadline will be given
  as the number of days left to complete the job. For example, if a job has a
  deadline of 1, then it can only be completed if it is the first job worked
  on. If a job has a deadline of 2, then it could be started on the first or
  second day.
  
  Note: There is no requirement to complete all of the jobs. Only one job can
  be worked on at a time, meaning that in some scenarios it will be impossible
  to complete them all.
*/

function optimalFreelancing(jobs) {
  // worth noting that this solution assumes you will work day 1 - 7
  // so it's finding optimal solutions in that range and NOT the best 
  // 7 day window of given jobs (prompt didn't specify, sliding window 
  // solution does not pass tests)
  const NUMBER_OF_DAYS = 7;
  let pay = 0;

  // go backwards from last day
  for (let day = NUMBER_OF_DAYS; day > 0; day--) {
    
    // find the best job
    const availableJobs = getAvailableJobsForDay(day, jobs);
    const bestJob = pickJobForDay(availableJobs);

    // take the payment
    pay += bestJob.payment;

    // invalidate the job from future consideration
    completeJob(bestJob, jobs);
  }

  return pay;
}

// possible jobs are those which the deadline have not passed
function getAvailableJobsForDay(day, jobs) {
  const jobsForDay = [];
  jobs.forEach(job => {
    if (job.deadline >= day) {
      jobsForDay.push(job);
    }
  });
  return jobsForDay;
}

// the best job is the one that pays the most!
function pickJobForDay(jobs) {
  let bestJob = { deadline: 0, payment: 0 };
  jobs.forEach((job, index) => {
    if (job.payment > bestJob.payment) {
      bestJob = job;
    }
  });
  return bestJob;
}

// mark a job as complete so it is not considered again
// NOTE: this alters the input array to the problem
// in real life, you would likely want to duplicate the array of jobs
// OR add a flag for if that job is complete/selected
// but for this problem I'm just setting its payment to 0
function completeJob(job, jobs) {
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].deadline === job.deadline && jobs[i].payment === job.payment) {
      // jobs.splice(i, 1);
      jobs[i].payment = 0;
      break;
    }
  }
}

// Do not edit the line below.
exports.optimalFreelancing = optimalFreelancing;
