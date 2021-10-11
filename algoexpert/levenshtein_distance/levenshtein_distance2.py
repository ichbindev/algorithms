def levenshteinDistance(str1, str2):
	short, long = getStringsBySize(str1, str2)
	evenRow = [x for x in range(len(short) + 1)]
	oddRow = [x for x in range(len(short) + 1)]
	
	for i in range(1, len(long) + 1):
		prevRow, currentRow = getRows(oddRow, evenRow, i)
		currentRow[0] = i
		for j in range(1, len(short) + 1):
			if long[i - 1] == short[j - 1]: 
				currentRow[j] = prevRow[j - 1] # diagonally back
			else:
				currentRow[j] = 1 + min(prevRow[j - 1], prevRow[j], currentRow[j - 1]) # min of neighbors
	return oddRow[-1] if len(long) % 2 == 1 else evenRow[-1]
	
def getRows(oddRow, evenRow, index): # returns prevRow, currentRow
	if index % 2 == 0:
		return [oddRow, evenRow]
	return [evenRow, oddRow]

def getStringsBySize(str1, str2): # returns short, long
	if len(str1) > len(str2):
		return [str2, str1]
	return [str1, str2]
