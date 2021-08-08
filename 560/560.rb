# Given the head of a singly linked list, reverse the list, and return the reversed list.

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
    return if head == nil
    
    current_node = head.next
    head.next = nil
    
    while current_node != nil
        # rewrite pointers
        next_node = current_node.next
        current_node.next = head
        
        # advance
        head = current_node
        current_node = next_node
    end
    head
end
