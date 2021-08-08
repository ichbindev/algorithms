# Given two strings s and t, return true if t is an anagram of s, and false otherwise.

# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
    if s.length != t.length
        return false
    end
    
    # convert both into a char: count hash
    s_hash = string_to_hash(s)
    t_hash = string_to_hash(t)
        
    # check the counts of the characters
    compare_hashes(s_hash, t_hash)
end

def string_to_hash(s)
    hash = {}
    s.each_char do |c|
        count = 0
        if hash.include?(c)
            count = hash[c]
        end
        hash[c] = count + 1
    end
    hash
end

def compare_hashes(s_hash, t_hash)
    s_hash.each_pair do |s_key, s_value|
        t_value = t_hash[s_key]
        if s_value != t_value
            return false
        end
    end
    true
end
