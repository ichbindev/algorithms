def getPermutations(array):
	permutations = []
	permutate([], array, permutations)
	return permutations

def permutate(done, todo, results):
	if todo:
		for index, val in enumerate(todo):
			newPermutation = done[:] + [val] # [:] not necessary but IMO more readable
			todoNext = todo[:index] + todo[index + 1:]
			permutate(newPermutation, todoNext, results)
	elif done: # elif avoids [[]] result for [] input
		results.append(done)

