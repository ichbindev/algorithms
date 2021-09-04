# Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

# @param {Integer} n, a positive integer
# @return {Integer}
def hamming_weight(n)
    # build lookup table for binary 0-15
    cache = build_cache()
    calc_weight(n, cache)
end

def calc_weight(bits, cache)    
    mask = 0xF
    sum = 0
    # grab the last 4 bits and get number of 1s from lookup table
    # then right shift over, keep going until you have all 0s
    until bits == 0
        index = bits & mask
        sum += cache[index]
        bits >>= 4
    end
    sum
end

# this optimizes for the mentioned case where this is called many times
# currently does 8 iterations per 32 bit int, could be made faster with a larger cache
# but 16 is plenty for the scope of this problem
def build_cache() 
    [
        0, # 0  0000
        1, # 1  0001
        1, # 2  0010
        2, # 3  0011
        1, # 4  0100
        2, # 5  0101
        2, # 6  0110
        3, # 7  0111
        1, # 8  1000
        2, # 9  1001
        2, # 10 1010
        3, # 11 1011
        2, # 12 1100
        3, # 13 1101
        3, # 14 1110
        4, # 15 1111
    ]
end

