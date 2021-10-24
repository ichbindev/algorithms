from math import factorial

def numberOfWaysToTraverseGraph(width, height):
	moveRight = width - 1
	moveLeft = height - 1
	
	numerator = factorial(moveRight + moveLeft)
	denominator = factorial(moveRight) * factorial(moveLeft)
	permutations = numerator / denominator
	
	return permutations
