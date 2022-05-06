'''
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

For example, the saying and conversion for digit string "3322251":
"3322251"
two 3s, three 2s, one 5, one 1
23 + 32 + 15 + 11
"23321511"

Given a positive integer n, return the nth term of the count-and-say sequence.
'''

class Solution:
    def countAndSay(self, n: int) -> str:
        num = '1'
        # base case
        if n == 1:
            return num

        # apply the countAndSay algorithm to the starting number n times
        for i in range(1, n):
            num = self.processNum(num)
        return num
    
    def processNum(self, num: str) -> str:
        # convert int into a tuple array: (num, count)
        counted = self.count(num)
        # "say" what's in the array
        return self.say(counted)
        
    def count(self, num: str) -> list[tuple]:
        current = num[0]
        count = 0
        counted = []
        for char in num:
            if char == current:
                count += 1
            else:
                counted.append( (current, count) )
                current = char
                count = 1
        counted.append( (char, count) )
        return counted
        
    def say(self, counted: list[tuple]) -> str:
        said = ''
        # array.reduce here
        for num, count in counted:
            said += str(count) + num
        return said
