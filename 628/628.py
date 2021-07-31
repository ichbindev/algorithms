# Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def __init__(self): 
        self.levels = []
        
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        self.traverse(root, 0)
        return self.levels
      
    # preorder traversal of the tree
    # append each item to it's matching level, creating a new list if necessary
    def traverse(self, node: TreeNode, level) -> None:
        if node is not None:
            if len(self.levels) <= level:
                self.levels.append([])
            self.levels[level].append(node.val)
            self.traverse(node.left, level + 1)
            self.traverse(node.right, level + 1)
