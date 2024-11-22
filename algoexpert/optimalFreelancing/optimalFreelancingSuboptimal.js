function optimalFreelancing(jobs) {
  let pay = 0;

  // go backwards from last day
  for (let day = 7; day > 0; day--) {
    
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
