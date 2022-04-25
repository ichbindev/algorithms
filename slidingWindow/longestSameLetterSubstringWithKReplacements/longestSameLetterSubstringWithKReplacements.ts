function characterReplacement(s: string, k: number): number {
    let start = 0,
        maxRepeatCount = 0,
        maxLength = 0,
        letterCounts: {[key: string]: number} = {};
    
    for (let end = 0; end < s.length; ++end) {
        const current = s[end];
        // add to window
        if (!(current in letterCounts)) letterCounts[current] = 0;
        ++letterCounts[current];
        maxRepeatCount = Math.max(maxRepeatCount, letterCounts[current]);
        
        // shrink window if there are more non-repeating characters 
        // than can be replaced
        while (end - start + 1 - maxRepeatCount > k) {
            const startChar = s[start];
            --letterCounts[startChar];
            ++start;
        }
        
        // check max
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
};
