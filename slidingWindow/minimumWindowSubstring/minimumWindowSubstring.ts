/*
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.
*/
function minWindow(s: string, t: string): string {
    let start = 0,
        shortestLength = s.length + 1,
        shortestSubstring = '',
        matched = 0;
    const hash = t.split('').reduce((acc, c) => {
        if (!(c in acc)) acc[c] = 0;
        ++acc[c];
        return acc;
    }, {});
    
    for (let end = 0; end < s.length; end++) {
        const c = s[end];
        // add to window
        if (c in hash) {
            --hash[c];
            hash[c] >= 0 && ++matched;
        }
        
        
        while (matched === t.length) {
            const currentLength = end - start + 1;
            shortestLength = Math.min(shortestLength, currentLength);
            if (shortestLength === currentLength) {
                shortestSubstring = s.substring(start, end + 1);
            }
            
            let sChar = s[start];
            if (sChar in hash) {
                ++hash[sChar];
                hash[sChar] > 0 && --matched;
            }
            
            start++;
        }
    }
    return shortestSubstring ? shortestSubstring : "";
};
