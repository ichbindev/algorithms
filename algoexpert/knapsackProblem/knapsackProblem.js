function knapsackProblem(items, capacity) {
  items.unshift([0, 0]);
  const values = buildValues(items, capacity);

  const maxValue = values[items.length - 1][capacity];
  const itemsUsed = findItemsUsed(items, values);

  return [
    maxValue,
    itemsUsed
  ];
}

function buildValues(items, capacity) {
  // initialize array to build best value at [i][c]
  const values = Array.from({ length: items.length }, () => 
    Array.from({ length: capacity + 1 }, () => 0)
  );

  // fill in array iteratively, values[i][c] is best possible
  // value at capacity c while chosing from the first i items
  for (let i = 1; i < items.length; i++) {
    const [value, weight] = items[i];
    for (let c = 0; c <= capacity; c++) {
      let bestValue = values[i - 1][c]; // best value if we don't use item
      if (c >= weight) {
        // value if we do use the item is value of the item 
        // plus the best value with the remaining capacity
        const valueWithItem = values[i - 1][c - weight] + value;
        // pick whichever value is higher, might not take item
        bestValue = Math.max(bestValue, valueWithItem);
      }
      values[i][c] = bestValue;
    }
  }

  return values;
}

function findItemsUsed(items, values) {
  const itemsUsed = [];
  let i = items.length - 1;
  let c = values[0].length - 1;
  while (i > 0) {
    // item was used in optimal value
    if (values[i][c] !== values[i - 1][c]) {
      // if an item was used, add it to the array
      // and subtract it's weight from the capacity
      itemsUsed.push(i - 1); // map to original item index since we pushed [0,0]
      c -= items[i][1];
    } 
    i--;

    if (c === 0) break;
  }

  return itemsUsed.reverse();
}

// Do not edit the line below.
exports.knapsackProblem = knapsackProblem;
