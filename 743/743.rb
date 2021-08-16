=begin
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i if non of the above conditions are true.
=end

# @param {Integer} n
# @return {String[]}
def fizz_buzz(n)
    output = []
    
    (1..n).each do |number|
        result = ''
        div_by_3 = number % 3 == 0
        div_by_5 = number % 5 == 0
        
        result += 'Fizz' if div_by_3
        result += 'Buzz' if div_by_5
        result += number.to_s unless div_by_3 || div_by_5
        
        output << result
    end
    output
end
