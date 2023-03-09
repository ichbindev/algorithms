export function longestPeak(array: number[]) {
  const indices = findPeaks(array);
  let maxPeak = 0;

  for (let i of indices) {
    const peakSize = calculatePeakSize(array, i);
    maxPeak = Math.max(maxPeak, peakSize);
  }

  return maxPeak;
}

function findPeaks(array: number[]): number[] {
  const peaks:number[] = [];
  
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      peaks.push(i);
    }
  }

  return peaks;
}

function calculatePeakSize(array: number[], index: number): number {
  let low = index, high = index;

  while (low >= 0 && array[low] > array[low - 1]) {
    --low;
  }

  while (high < array.length && array[high] > array[high + 1]) {
    ++high;
  }
  
  return high - low + 1;
}
