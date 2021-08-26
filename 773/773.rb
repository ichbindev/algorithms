# Given head, the head of a linked list, determine if the linked list has a cycle in it.

# Return true if there is a cycle in the linked list. Otherwise, return false.

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {Boolean}
def hasCycle(head)
    fast = slow = head
    until slow.nil? || fast.nil?
        slow = slow.next
        fast = fast.next
        return false if fast.nil?
        fast = fast.next
        return true if fast == slow
    end
    false
end
