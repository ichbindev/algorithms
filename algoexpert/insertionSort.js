function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
		insert(array, i);
	}
	return array;
}

function insert(array, index) {
	let positioned = false;
	while (!positioned && index > 0) {
		if (array[index] < array[index - 1]) {
			[array[index], array[index - 1]] = [array[index - 1], array[index]]
		} else {
			positioned = true;
		}
		index--;
	}
}

// Do not edit the line below.
exports.insertionSort = insertionSort;

