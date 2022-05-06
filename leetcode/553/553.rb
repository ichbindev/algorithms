=begin
Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.
=end

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} node
# @return {Void} Do not return anything, modify node in-place instead.
def delete_node(node)
    # technically, we're going to delete the next node and preserve it's value
    next_node = node.next
    # copy the value of the next node over to this node
    node.val = next_node.val
    # replace the reference to the next node with it's next node
    node.next = next_node.next
end
