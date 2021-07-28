# Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        # tree is symmetrical if subtrees mirror each other
        return self.checkSymmetry(root, root)
    
    def checkSymmetry(self, n1: TreeNode, n2: TreeNode) -> bool:
        if n1 is None and n2 is None:
            return True
        # check for unbalanced tree
        if n1 is None or n2 is None:
            return False
        
        # check corresponding values which are alternate for n1 and n2
        valuesMatch = n1.val == n2.val        
        leftSideMatches = self.checkSymmetry(n1.left, n2.right)
        rightSideMatches = self.checkSymmetry(n1.right, n2.left)
        
        return valuesMatch and leftSideMatches and rightSideMatches
        
