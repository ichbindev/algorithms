export function selectionSort(array: number[]) {
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[smallest] > array[j]) {
        smallest = j;
      }
    }
    // swap current index with smallest entry
    [array[i], array[smallest]] = [array[smallest], array[i]];
  }
  return array;
}
