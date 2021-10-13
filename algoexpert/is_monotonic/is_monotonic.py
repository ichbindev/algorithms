def isMonotonic(array):
	increasing = None
	while len(array) >= 2:
		previous, current = array[0], array[1]
		if previous != current:
			if isIncreasing is not None:
				if not followsCurrentDirection(previous, current, isIncreasing):
					return False
			else:
				isIncreasing = previous < current
		array = array[1:]	
		
	return True

def followsCurrentDirection(previous, current, isIncreasing):
	if isIncreasing:
		return previous <= current
	return previous >= current
