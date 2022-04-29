/*
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

function findAnagrams(s: string, p: string): number[] {
    const hash = p.split('').reduce((acc, c) => {
        if (!acc[c]) acc[c] = 0;
        ++acc[c];
        return acc;
    }, {});
    
    let start = 0,
        matched = 0,
        matching = Object.keys(hash).length,
        indices = [];

    for (let end = 0; end < s.length; end++) {
        const c = s[end];
        if (c in hash) {
            --hash[c];
            if (hash[c] === 0) {
                ++matched;
            }
        }
        
        if (matched === matching) indices.push(start);
        
        if (end >= p.length - 1) {
            const startChar = s[start];
            ++start;
            if (startChar in hash) {
                if (hash[startChar] === 0) --matched;
                ++hash[startChar];
            }
        }
    }
    
    return indices;
};
