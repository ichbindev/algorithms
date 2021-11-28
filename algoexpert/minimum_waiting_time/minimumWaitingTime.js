function minimumWaitingTime(queries) {
	// put the shortest jobs at the beginning
  queries.sort((a, b) => a - b);
	
	// calculate how much time is spent waiting
	totalTime = 0;
	queries.forEach((e, i) => {
		let itemsLeft = queries.length - 1 - i;
		totalTime += e * itemsLeft;
	});
	
	return totalTime;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;

