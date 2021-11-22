# This is the class of the input root. Do not edit it.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def branchSums(root):
    sums = []
	getSums(root, 0, sums)
	return sums

def getSums(node, total, sums):
	# avoid accessing left/right/value of None
	if node is None:
		return
	
	if isLeafNode(node):
		sums.append(total + node.value)
	else:
		getSums(node.left, total + node.value, sums)
		getSums(node.right, total + node.value, sums)

def isLeafNode(node):
	return node.left is None and node.right is None
