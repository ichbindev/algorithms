def quickSort(array):
    quicksort(array, 0, len(array) - 1)
	return array

def quicksort(arr, start, end):
	if start >= end: return

	# pick pivot
	pivot = start
	# get left and right index
	left, right = start + 1, end
	
	while left <= right:
		# if left > pivot and right < pivot
		if arr[left] > arr[pivot] and arr[right] < arr[pivot]:
			# swap left and right
			swap(left, right, arr)
			# increment left and decrease right
			left += 1
			right -= 1
		
		# if left in right position
		elif arr[left] <= arr[pivot]:
			# left += 1
			left += 1
		# if right in right position
		elif arr[right] >= arr[pivot]:
			# right -= 1
			right -= 1
	# swap right and pivot
	swap(pivot, right, arr)
	# pivot is now at right index
	# find out if left or right subarray is smaller
	leftIsSmaller = (right - 1) - start <= end - (right + 1)
	# quicksort smaller subarray
	# quicksort larger subarray
	if leftIsSmaller:
		quicksort(arr, start, right - 1)
		quicksort(arr, right + 1, end)
	else:
		quicksort(arr, right + 1, end)
		quicksort(arr, start, right - 1)
	
def swap(a, b, arr):
	arr[a], arr[b] = arr[b], arr[a]

