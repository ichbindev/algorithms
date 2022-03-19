/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length;

    // create a sliding window, keep track of start and end
    // store substring with an array as a simple hashset for quick lookup
    let start = 0,
        end = 0;
    const window = Array(128).fill(0);
    
    let maxSubstring = 0;

    while (end < s.length) {
        const c = s.charCodeAt(end);
        
        // we hit a duplicate
        if (window[c]) {
            // advance until we've removed it, deleting every character we pass
            while (window[c]) {
                const currentChar = s.charCodeAt(start);
                window[currentChar]--;
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
        window[c]++;
        end++;
    }
    
    return maxSubstring;
};
