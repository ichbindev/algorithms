class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        result = []
        for i in range(1, n + 1):
            pushMe = ''
            divBy3 = i % 3 == 0
            divBy5 = i % 5 == 0
            
            if divBy3:
                pushMe += 'Fizz'
            if divBy5:
                pushMe += 'Buzz'
            if not divBy3 and not divBy5:
                pushMe += str(i)
            result.append(pushMe)
            
        return result
