def binarySearch(array, target):
    start = 0
	end = len(array) 
	while start < end:
		mid = (start + end) // 2 
		print(start, end, mid)
		if array[mid] < target:
			start = mid + 1
		elif array[mid] > target:
			end = mid 
		else:
			return mid
    return -1

