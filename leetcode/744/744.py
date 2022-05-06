class Solution:
    def countPrimes(self, n: int) -> int:
        # array of booleans representing if the number corresponding to that index is prime
        primes = [True] * n
        
        # 0 and 1 aren't prime
        if n < 3: return 0
        primes[0] = primes[1] = False
        
        # anything that doesn't have a factor < sqrt(n) but is less than n is prime
        ceilingRoot = ceil(sqrt(n))
        for i in range(2, ceilingRoot):
            if primes[i]:
                # everything that's a multiple of i is not prime
                # numbers < i^2 is covered by lower factors
                for j in range(i*i, n, i):
                    primes[j] = False

        return sum(primes)
