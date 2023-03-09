export function longestPeak(array: number[]) {
  let maxPeak = 0;
  
  for (let i = 1; i < array.length - 1; i++) {
    const isPeak = array[i] > array[i - 1] && array[i] > array[i + 1]
    if (isPeak) {
        let low = i, high = i;

        while (low >= 0 && array[low] > array[low - 1]) {
          --low;
        }
      
        while (high < array.length && array[high] > array[high + 1]) {
          ++high;
        }
        const peakLength = high - low + 1
        maxPeak = Math.max(maxPeak, peakLength);

        i = high;
    }
  }

  return maxPeak;
}