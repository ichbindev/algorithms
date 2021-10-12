def sortedSquaredArray(array):
	square = lambda x: x**2
	
	squaredList = list(map(square, array))
	squaredList.sort()
	
    return squaredList

