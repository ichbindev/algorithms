# Given the root of a binary tree, determine if it is a valid binary search tree (BST).

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        nodeList: List[int] = []
        self.traverseInOrder(root, nodeList)
        return self.isInOrder(nodeList)
        
    def traverseInOrder(self, node: TreeNode, nodeList: List[int]) -> None:
        if node is None: 
            return
        self.traverseInOrder(node.left, nodeList)
        nodeList.append(node.val)
        self.traverseInOrder(node.right, nodeList)
        
    def isInOrder(self, nodeList: List[int]) -> None:
        prev = nodeList[0]
        for i in range(1, len(nodeList)):
            if nodeList[i] <= prev:
                return False
            prev = nodeList[i]
        return True
    
