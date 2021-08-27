# Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def merge_two_lists(l1, l2)
    head = current_node = nil
    
    until l1.nil? && l2.nil?
        
        if l2.nil? || l1 && l1.val < l2.val
            val = l1.val
            l1 = l1.next
        else
            val = l2.val
            l2 = l2.next
        end
        prev_node = current_node
        current_node = ListNode.new(val, nil)
        
        prev_node.next = current_node if prev_node
        head = current_node if head.nil?
    end
    
    head
end

