function findThreeLargestNumbers(array) {
	const tracker = new Tracker();
	array.forEach(num => tracker.track(num));
	return tracker.getTracked();
}

class Tracker {
	constructor() {
		this.tracked = [null, null, null];
	}
	
	add(number, index) {
		for (let i = 0; i < index; i++) {
			this.tracked[i] = this.tracked[i + 1];
		}
		this.tracked[index] = number;
	}
	
	getTracked() {
		return this.tracked;
	}
	
	track(number) {
		if (this.tracked[2] === null || number > this.tracked[2]) {
			this.add(number, 2);
		} else if (this.tracked[1] === null || number > this.tracked[1]) {
			this.add(number, 1);
		} else if (this.tracked[0] === null || number > this.tracked[0]) {
			this.add(number, 0);
		}
	}
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;

