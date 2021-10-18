from random import randrange

def quickSort(array):
    quicksort(array, 0, len(array) - 1)
	return array

def quicksort(arr, start, end):
	if start >= end: 
		return

	pivot = start
	randomPivot = randrange(start, end)
	swap(randomPivot, start, arr)
	
	left, right = start + 1, end
	
	while left <= right:
		if arr[left] > arr[pivot] and arr[right] < arr[pivot]:
			swap(left, right, arr)
			left += 1
			right -= 1
		elif arr[left] <= arr[pivot]:
			left += 1
		elif arr[right] >= arr[pivot]:
			right -= 1

	swap(pivot, right, arr)

	leftIsSmaller = (right - 1) - start <= end - (right + 1)
	if leftIsSmaller:
		quicksort(arr, start, right - 1)
		quicksort(arr, right + 1, end)
	else:
		quicksort(arr, right + 1, end)
		quicksort(arr, start, right - 1)
	
def swap(a, b, arr):
	arr[a], arr[b] = arr[b], arr[a]

