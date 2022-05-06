# Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

# @param {Integer} n, a positive integer
# @return {Integer}
def hamming_weight(n)
    # todo: make bitwise
    cache = build_cache()
    
    bits = n.to_s(2)
    bits = pad(bits)
    
    calc_weight(bits, cache)
end

def calc_weight(bits, cache)
    sum = index = 0
    8.times do 
        sub = bits[index..(index + 3)]
        sum += cache[sub] if cache[sub]
        index += 4
    end
    sum
end

def pad(bits) 
    difference = 32 - bits.length
    '0'*difference + bits
end

def build_cache() 
    {
        '0000' => 0,
        '0001' => 1,
        '0010' => 1,
        '0011' => 2,
        '0100' => 1,
        '0101' => 2,
        '0110' => 2,
        '0111' => 3,
        '1000' => 1,
        '1001' => 2,
        '1010' => 2,
        '1011' => 3,
        '1100' => 2,
        '1101' => 3,
        '1110' => 3,
        '1111' => 4
    }
end

