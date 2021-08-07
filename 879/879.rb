# Write a function that reverses a string. The input string is given as an array of characters s.

# @param {Character[]} s
# @return {Void} Do not return anything, modify s in-place instead.
def reverse_string(s)
    front = 0
    back = -1
    while front < s.size / 2
        temp = s[front]
        s[front] = s[back]
        s[back] = temp
        front += 1
        back -= 1
    end
end
