def firstDuplicateValue(array):
	for num in array:
		index = abs(num) - 1
		if array[index] < 0:
			return abs(num)
		array[index] *= -1
	return -1

