# Given the head of a singly linked list, reverse the list, and return the reversed list.

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if head is None:
            return
        
        nextNode = head.next
        head.next = None
        
        while nextNode is not None:
            futureNode = nextNode.next
            nextNode.next = head
            head = nextNode
            nextNode = futureNode
            
        return head
