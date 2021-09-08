# @param {Integer} n, a positive integer
# @return {Integer}
def reverse_bits(n)
    bits = n.to_s(2)
    bits = '0'*(32-bits.length) + bits
    bits = bits.reverse
    bits.to_i(2)
end
