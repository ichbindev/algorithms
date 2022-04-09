const matchBrackets: {[key: string]: string} = {
	')': '(',
	']': '[',
	'}': '{'
};

export function balancedBrackets(string: string): boolean {
	const stack: string[] = [];
	const openingBrackets: string[] = Array.from(Object.values(matchBrackets));
  for (let c of string) {
		const matchingChar = matchBrackets[c];
		if (matchingChar) {
			const matchingBracket = stack.pop();
			if (!matchingBracket || matchingChar !== matchingBracket) {
				return false;
			}
		} else if (openingBrackets.includes(c)) {
			stack.push(c);
		}
	}
	return !stack.length;
}

