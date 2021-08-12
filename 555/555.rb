# Given the root of a binary tree, return its maximum depth.

# A binary tree's maximum depth is the number of nodes along the 
# longest path from the root node down to the farthest leaf node.

# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Integer}
def max_depth(root)
    return depth_first_search(root, 0)
end

def depth_first_traversal(node, level)
    return level if node == nil
    left = depth_first_traversal(node.left, level + 1)
    right = depth_first_traversal(node.right, level + 1)
    return [left, right].max
end
