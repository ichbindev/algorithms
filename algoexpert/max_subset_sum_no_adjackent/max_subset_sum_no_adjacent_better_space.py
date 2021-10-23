def maxSubsetSumNoAdjacent(array):
	if not array: return 0
	if len(array) == 1: return array[0]
	twoBack = array[0]
	oneBack = max(array[1], twoBack)
    for i in range(2, len(array)):
		current = max(oneBack, twoBack + array[i])
		twoBack = oneBack
		oneBack = current	
	return oneBack
