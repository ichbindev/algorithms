type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  array.sort((a, b) => a - b);
	const results: Triplet[] = [];
	
	// return ALL the triplets
	// two pointer method
	for (let i = 0; i < array.length; i++) {
		let start = i + 1, 
				end = array.length - 1;
		while (start < end) {
			const a = array[i],
						b = array[start],
						c = array[end],
						currentTotal = a + b + c;
			
			if (currentTotal < targetSum) {
				start++;
			} else if (currentTotal > targetSum) {
				end--;
			} else {
				results.push([a, b, c]);
				start++;
				end--;
			}
		}
	}
	
  return results;
}

