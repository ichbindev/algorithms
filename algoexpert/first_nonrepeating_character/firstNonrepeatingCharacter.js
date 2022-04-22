function firstNonRepeatingCharacter(string) {
  let letterCounts = {};
	for (let c of string) {
		let count = 1;
		if (letterCounts[c]) {
			count += letterCounts[c];
		}
		letterCounts[c] = count;
	}
	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		if (letterCounts[char] === 1) {
			return i;
		}
	}
	console.log(letterCounts)
	return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;

