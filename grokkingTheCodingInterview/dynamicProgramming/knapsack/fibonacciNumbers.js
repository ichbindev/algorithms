/*
Write a function to calculate the nth Fibonacci number.

Fibonacci numbers are a series of numbers in which each number 
is the sum of the two preceding numbers. First few Fibonacci numbers are: 
0, 1, 1, 2, 3, 5, 8, ...

Mathematically we can define the Fibonacci numbers as:

    Fib(n) = Fib(n-1) + Fib(n-2), for n > 1

    Given that: Fib(0) = 0, and Fib(1) = 1

Constraints:
- 0 <= n <= 30
*/

class Solution{

  calculateFibonacci(n) {
    const fib = [0, 1];

    while (fib.length <= n) {
      const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
      fib.push(nextFib);
    }
    
    return fib[n];
  }
}
