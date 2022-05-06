# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        '''
        Given the root of a binary tree, return its maximum depth.

        A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
        '''
        return self.depthFirst(root)
        
    def depthFirst(self, node: TreeNode) -> int:
        if node is None:
            return 0
        left = self.depthFirst(node.left)
        right = self.depthFirst(node.right)
        return 1 + max(left, right)

