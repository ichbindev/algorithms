# This is an input class. Do not edit.
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right
		
class TreeTracker:
	def __init__(self, numVisited, lastVisited):
		self.numVisited = numVisited
		self.lastVisited = lastVisited
		
	def incrementVisited(self):
		self.numVisited += 1
		
	def setLastVisited(self, lastVisited):
		self.lastVisited = lastVisited

def findKthLargestValueInBst(tree, k):
	tracker = TreeTracker(0, None)
	inOrder(tree, tracker, k)
    return tracker.lastVisited

def inOrder(tree, tracker, k):
	if tree is not None and tracker.numVisited < k:
		inOrder(tree.right, tracker, k)
		if tracker.numVisited < k:
			tracker.incrementVisited()
			tracker.setLastVisited(tree.value)
			tracker.lastVisited = tree.value
			inOrder(tree.left, tracker, k)

