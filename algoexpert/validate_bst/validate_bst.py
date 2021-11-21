# This is an input class. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def validateBst(tree):
	return helpValidateBst(tree, float('-inf'), float('inf'))
	
def helpValidateBst(node, minV, maxV):
    if node is None:
		return True
	
	left, right, value = node.left, node.right, node.value
	if value >= maxV or value < minV:
		return False
	
	leftSideIsValid = helpValidateBst(left, minV, value)
	rightSideIsValid = helpValidateBst(right, value, maxV)
	
	return leftSideIsValid and rightSideIsValid

