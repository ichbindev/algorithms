def isValidSubsequence(array, sequence):
    large, small = 0, 0
	while large < len(array):
		if array[large] == sequence[small]:
			small += 1
			if small == len(sequence):
				return True
		large += 1
	return False

