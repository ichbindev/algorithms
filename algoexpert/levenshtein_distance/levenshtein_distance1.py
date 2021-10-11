def levenshteinDistance(str1, str2):
    arr = [[x for x in range(len(str1) + 1)] for y in range(len(str2) + 1)]
	# fill in array
	for i in range(1, len(arr)):
		arr[i][0] = arr[i - 1][0] + 1

	for a in range(1, len(arr)):
		for b in range(1, len(arr[0])):
			if str1[b - 1] == str2[a - 1]: # fix 
				arr[a][b] = arr[a-1][b-1] # diagonally back
			else:
				arr[a][b] = 1 + min(arr[a-1][b-1], arr[a][b-1], arr[a-1][b]) # min of neighbors

	return arr[-1][-1]
