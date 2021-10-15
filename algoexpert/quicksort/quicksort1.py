from random import randrange

def quickSort(array):
    if len(array) < 2:
		return array
	pivotIndex = randrange(len(array))
	pivot = array[pivotIndex]
	
	less = [x for x in array[(pivotIndex + 1):] if x <= pivot]
	less += [x for x in array[:pivotIndex] if x <= pivot]
	more = [x for x in array[(pivotIndex + 1):] if x > pivot]
	more += [x for x in array[:pivotIndex] if x > pivot]
	
	return quickSort(less) + [pivot] + quickSort(more)
