def spiralTraverse(array):
    sRow, sCol = 0, 0
	eRow, eCol = len(array) - 1, len(array[0]) - 1
	result = []
	while sRow <= eRow and sCol <= eCol:
		# right
		for col in range(sCol, eCol + 1):
			result.append(array[sRow][col])
		# down
		for row in range(sRow + 1, eRow + 1):
			result.append(array[row][eCol])
		# left (avoid double count)
		for col in reversed(range(sCol, eCol)):
			if sRow >= eRow: break
			result.append(array[eRow][col])
		# up (avoid double count)
		for row in reversed(range(sRow + 1, eRow)):
			if sCol >= eCol: break
			result.append(array[row][sCol])
		
		sRow += 1
		sCol += 1
		eRow -= 1
		eCol -= 1
	
	return result
