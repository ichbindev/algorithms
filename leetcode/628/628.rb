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
# @return {Integer[][]}
def level_order(root)
    node_list = []
    traverse_and_fill!(root, 0, node_list)
    node_list
end

# depth-first preorder traversal of binary tree
# updates the node_list values in place
def traverse_and_fill!(node, level, node_list)
    return if node.nil?
    
    # add the value of the current level to the right array
    # creating it if necessary
    node_list << [] if node_list[level].nil?
    node_list[level] << node.val
    
    # recursion goes here
    traverse_and_fill!(node.left, level + 1, node_list)
    traverse_and_fill!(node.right, level + 1, node_list)
end
