export function longestPeak(array: number[]) {
  let maxPeak = 0;
  
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
        let low = i, high = i;

        while (low >= 0 && array[low] > array[low - 1]) {
          --low;
        }
      
        while (high < array.length && array[high] > array[high + 1]) {
          ++high;
        }
        
        maxPeak = Math.max(maxPeak, high - low + 1);
    }
  }

  return maxPeak;
}