# Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

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
# @return {Boolean}
def is_symmetric(root)
    check_mirror(root.left, root.right)
end

def check_mirror(left, right)
    # happy base case
    return true if left.nil? && right.nil?
    # if only one is nil then they don't mirror each other
    return false if left.nil? || right.nil?
    
    return false if left.val != right.val
    outer = check_mirror(left.left, right.right)
    inner = check_mirror(left.right, right.left)
    
    outer && inner
end
