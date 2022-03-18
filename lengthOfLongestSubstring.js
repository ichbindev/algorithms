/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length;

    // create a sliding window, keep track of start and end
    // and store substring as a hashset for quick lookup
    let start = 0,
        end = 0;
    const window = new Set();
    
    let maxSubstring = 0;

    while (end < s.length) {
        const c = s[end];
        
        // we hit a duplicate
        if (window.has(c)) {
            // advance until we've removed it, deleting every character we pass
            while (window.has(c)) {
                const currentChar = s[start]
                window.delete(currentChar);
                start++;
            }
        } else {
            // keep going, save the high score
            const currentSubstring = end - start + 1;
            if (currentSubstring > maxSubstring) {
                maxSubstring = currentSubstring
            }
        }
        // add it to the window and continue processing
        window.add(c);
        end++;
    }
    
    return maxSubstring;
};
