# Given the head of a linked list, remove the nth node from the end of the list and return its head.

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @param {Integer} n
# @return {ListNode}
def remove_nth_from_end(head, n)
    # if there's only one node, remove it
    return nil unless head.next
    # get a pointer at the nth node
    first = advance_first(head, n)
    # if there are only n nodes, remove the first one
    return head.next if first.nil? 
    # move the pointer until it hits the end
    # you now have the node before the nth node
    lag = find_lag(first, head)
    # delete the nth node from the end
    remove_next(lag)
    
    head
end

def advance_first(head, n)
    n.times do
        head = head.next
    end
    head
end

def find_lag(first, lag)
    while first.next
        first = first.next
        lag = lag.next
    end
    lag
end

def remove_next(node) 
    new_next = node.next.next
    node.next = new_next
end

