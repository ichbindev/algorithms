# Given the head of a singly linked list, return true if it is a palindrome.

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {Boolean}
def is_palindrome(head)
    list = to_list(head)
    verify_palindrome(list)
end

def to_list(node)
    list = []
    while node != nil 
        list << node
        node = node.next
    end
    list
end

def verify_palindrome(list)
    first = 0
    last = list.length - 1
    while first <= last
        return false if list[first].val != list[last].val
        first += 1
        last -= 1
    end
    true
end
