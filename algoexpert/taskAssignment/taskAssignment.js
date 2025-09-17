function taskAssignment(k, tasks) {
  const indices = {};
  tasks.forEach((task, i) => {
    if (!(task in indices)) indices[task] = [];
    indices[task].push(i);
  });
  
  tasks.sort((a, b) => a - b);
  
  const result = [];
  for (let i = 0; i < k; i++) {
    const smallNumber = tasks[i],
          smallIndex = indices[smallNumber].pop(),
          largeNumber = tasks[tasks.length - 1 - i],
          largeIndex = indices[largeNumber].pop();
    result.push([smallIndex, largeIndex]);
  }
  
  return result;
}

// Do not edit the line below.
exports.taskAssignment = taskAssignment;
