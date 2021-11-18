def findClosestValueInBst(tree, target):
    diff = DifferenceTracker()
    findClosestValue(tree, target, diff)
	return diff.value
	
def findClosestValue(node, target, diff):
	if node is not None:
		difference = abs(target - node.value)
		if difference < diff.difference:
			diff.difference = difference
			diff.value = node.value
		findClosestValue(node.left, target, diff)
		findClosestValue(node.right, target, diff)

class DifferenceTracker():
	def __init__(self):
		self.difference = float('inf')
		self.value = None


# This is the class of the input tree. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

