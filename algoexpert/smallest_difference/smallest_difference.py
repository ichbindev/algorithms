def smallestDifference(arrayOne, arrayTwo):
    arrayOne.sort(), arrayTwo.sort()
	diff = calculateSmallestDifference(arrayOne, arrayTwo)
	return diff.values

def calculateSmallestDifference(a1, a2):
	p1, p2 = 0, 0
	diff = BestDifference(a1[p1], a2[p2])
	while p1 < len(a1) and p2 < len(a2):
		v1, v2 = a1[p1], a2[p2]
		diff.set(v1, v2)
		if v1 < v2:
			p1 += 1
		elif v2 < v1:
			p2 += 1
		else: break # we're done here, can't beat 0
		
	return diff
	
class BestDifference:
	def __init__(self, v1, v2):
		self.bestDifference = float('inf')
		self.set(v1, v2)
		
	def set(self, v1, v2):
		difference = abs(v1 - v2)
		if difference < self.bestDifference:
			self.values = [v1, v2]
			self.bestDifference = difference
