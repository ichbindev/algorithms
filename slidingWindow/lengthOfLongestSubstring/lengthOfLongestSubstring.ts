function lengthOfLongestSubstring(s: string, maxRepeats: number = 1): number {
    let longestSubstring = 0,
        start = 0,
        currentChars = [];
    
    for (let end = 0; end < s.length; end++) {
        // add the new char to the window
        const currentChar = s[end],
              currentCharIndex = getIndex(currentChar);
        if (!currentChars[currentCharIndex]) currentChars[currentCharIndex] = 0;
        currentChars[currentCharIndex] += 1;
        
        // if it is a duplicate char (invalid substring)
        // shrink window until you remove that char
        while (currentChars[currentCharIndex] > maxRepeats) {
            const startChar = s[start],
                  startCharIndex = getIndex(startChar);  
            currentChars[startCharIndex] -= 1;
            start++;
        }
        
        // check if it's the biggest substring
        longestSubstring = Math.max(longestSubstring, end - start + 1);
    }
    return longestSubstring;
};

function getIndex(c: string) {
    return c.charCodeAt(0) - 'a'.charCodeAt(0);
}
