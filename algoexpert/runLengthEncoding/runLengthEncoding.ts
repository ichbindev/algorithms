type Current = {
	char: string,
	count: number
}

export function runLengthEncoding(string: string) {
  const current: Current = {
		char: string[0],
		count: 1
	};
	let result = '';
	
	for (let i = 1; i < string.length; i++) {
		if (string[i] === current.char) {
			current.count++;
		} else {
			result += write(current);
			current.count = 1;
			current.char = string[i];
		}
	}
	result += write(current);
	return result;
}

function write(current: Current): string {
	let result = '';
	while (current.count > 9) {
		result += `9${current.char}`;
		current.count -= 9;
	}
	return result + `${current.count}${current.char}`;
}

