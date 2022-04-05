export function arrayOfProducts(array: number[]): number[] {
  const result = Array(array.length).fill(1);
	doLeftProducts(array, result);
	doRightProducts(array, result);
	return result;
}

function doLeftProducts(array: number[], result: number[]) {
	let product = 1;
	for (let i = 0; i < array.length; i++) {
		result[i] = product;
		product *= array[i];
	}
}

function doRightProducts(array: number[], result: number[]) {
	let product = 1;
	for (let i = array.length - 1; i >= 0; i--) {
		result[i] *= product;
		product *= array[i];
	}
}

