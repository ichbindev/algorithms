def binarySearch(array, target):
    return binarySearchRecursive(array, target, 0, len(array))

def binarySearchRecursive(array, target, start, end):
	if start < end:
		mid = (start + end) // 2 
		print(start, end, mid)
		if array[mid] < target:
			start = mid + 1
		elif array[mid] > target:
			end = mid 
		else:
			return mid
		return binarySearchRecursive(array, target, start, end)
	else:
		return -1
