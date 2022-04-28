/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
*/

function checkInclusion(s1: string, s2: string): boolean {
   const hash = s1.split('').reduce((acc, c) => {
        if (!acc[c]) acc[c] = 0;
        ++acc[c];
        return acc;
    }, {});
    
    let start = 0,
        matched = 0,
        matching = Object.keys(hash).length;

    for (let end = 0; end < s2.length; end++) {
        const c = s2[end];
        if (c in hash) {
            --hash[c];
            if (hash[c] === 0) {
                ++matched;
            }
        }
        
        if (matched === matching) return true;
        
        if (end >= s1.length - 1) {
            const startChar = s2[start];
            ++start;
            if (startChar in hash) {
                if (hash[startChar] === 0) --matched;
                ++hash[startChar];
            }
        }
    }
    
    return false;
};

function hashFrom(s: string) {
    return s.split('').reduce((acc, c) => {
        if (acc[c]) ++acc[c];
        else acc[c] = 1;
        return acc;
    }, {});
}

