function lengthOfLongestSubstring(s: string): number {
    let longestSubstring = 0,
        start = 0,
        charIndexes: {[key: string]: number} = {};
    
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        // if char is already seen, shrink the window
        // if it's last appearance was after the current
        // starting index
        if (charIndexes[currentChar] !== undefined) {
            start = Math.max(charIndexes[currentChar] + 1, start);
        }
        // add current char
        charIndexes[currentChar] = end;
        
        // check if it's the biggest substring
        longestSubstring = Math.max(longestSubstring, end - start + 1);
    }
    return longestSubstring;
};
