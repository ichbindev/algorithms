function productSum(array, depth = 1) {
  return array.reduce((acc, element) => {
		let sum = 0;
		if (Array.isArray(element)) {
			sum = productSum(element, depth + 1);
		} else {
			sum = element;
		}
		return acc + (sum * depth);
	}, 0);
}

// Do not edit the line below.
exports.productSum = productSum;

