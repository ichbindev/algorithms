# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        '''
        Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
        '''
        head = None
        result = None
        while l1 is not None or l2 is not None:
            val = None
            if l1 is not None and l2 is None:
                val = l1.val
                l1 = l1.next
            elif l1 is None and l2 is not None:
                val = l2.val
                l2 = l2.next
            else:
                if l1.val < l2.val:
                    val = l1.val
                    l1 = l1.next
                else:
                    val = l2.val
                    l2 = l2.next
            if head is None:
                head = ListNode(val)
                result = head
            else:
                result.next = ListNode(val)
                result = result.next
        return head
