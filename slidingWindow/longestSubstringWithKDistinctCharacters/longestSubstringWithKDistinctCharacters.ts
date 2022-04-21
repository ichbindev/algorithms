function findLongestSubstringWithKDistinctCharacters(s: string, k: number): number {
	let start = 0,
		longestSubstring = 0,
		w: {key[string]: number} = {};

	// extend out the window
	for (let i = 0; i < s.length; i++) {
		const currentChar = s[i];

		// add the current character to the sliding window
		let count = 0;
		if (w[currentChar]) count = w[currentChar];
		w[currentChar] = ++count;

		// if there are too many distinct characters,
		// shrink the window until there aren't
		while (Object.keys(w).length > k) {
			const startChar = s[start];
			w[startChar]--;
			if (w[startChar] === 0) {
				delete w[startChar];
			}
			start++;
		}

		// track if this was the biggest window yet
		const length = i - start + 1;
		if (length > longestSubstring) {
			longestSubstring = length;
		}
	}

	return longestSubstring;
}
