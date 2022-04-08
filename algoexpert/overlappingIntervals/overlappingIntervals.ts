export function mergeOverlappingIntervals(array: number[][]) {
	array.sort((a, b) => a[0] - b[0]);
  return mergeIntervals(array);
}

function mergeIntervals(intervals: number[][]): number[][] {
	const merged: number[][] = []
	let previous = intervals[0];
	
	for (let i = 1; i < intervals.length; i++) {
		if (isOverlapping(previous, intervals[i])) {
			previous = combine(previous, intervals[i]);
		} else {
			merged.push(previous);
			previous = intervals[i];
		}
	}
	merged.push(previous);
	
	return merged;
}

function isOverlapping(a: number[], b: number[]): boolean {
	return a[1] >= b[0];
}

function combine(a: number[], b: number[]): number[] {
	const biggestEnd = Math.max(a[1], b[1]);
	return [a[0], biggestEnd];
}

