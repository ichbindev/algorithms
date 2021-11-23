def nodeDepths(root):
    sumOfDepths = DepthCounter()
	sumLevels(root, 0, sumOfDepths)
    return sumOfDepths.value

def sumLevels(node, depth, sums):
	if node != None:
		sums.add(depth)
		sumLevels(node.left, depth + 1, sums)
		sumLevels(node.right, depth + 1, sums)

class DepthCounter:
	def __init__(self):
		self.value = 0
		
	def add(self, number):
		self.value += number


# This is the class of the input binary tree.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

