export function longestPalindromicSubstring(string: string) {
	let longest = string[0];
	for (let start = 0; start <= string.length; start++) {
		for (let end = start + 1; end <= string.length; end++) {
			const substring = string.substring(start, end);
			if (substring.length > longest.length && isPalindrome(substring)) {
					longest = substring;
			}
		}
	}
	return longest;
}

function isPalindrome(s: string): boolean {
	return s === s.split('').reverse().join('');
}

