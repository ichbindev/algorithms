# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        '''
        Given the head of a singly linked list, return true if it is a palindrome.
        '''
        
        # convert to list
        asList = []
        while head is not None:
            result.append(head.val)
            head = head.next
            
        # check if list is palindromic    
        for i in range(0, len(asList) // 2):
            if asList[i] != asList[-(i + 1)]:
                return False
        return True
    
        
