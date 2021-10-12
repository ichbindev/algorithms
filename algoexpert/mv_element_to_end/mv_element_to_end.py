def moveElementToEnd(array, toMove):
    start = 0
	end = len(array) - 1
    while start < end:
		while start < end and array[end] == toMove:
			end -= 1
		if array[start] == toMove:
			array[start], array[end] = array[end], array[start]
		start += 1
	return array
		
