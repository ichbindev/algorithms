# Given an integer n, return true if it is a power of three. Otherwise, return false.

# An integer n is a power of three, if there exists an integer x such that n == 3**x.

# @param {Integer} n
# @return {Boolean}
def is_power_of_three(n)
    return false unless n & 1 == 1 # all powers of 3 are odd
    return true if n == 1
    
    num = n.to_f
    while num > 1
        num /= 3
    end
    
    num == 1 
end
