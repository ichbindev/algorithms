/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    
    // count the occurences of each word, store in dict
    let wordCounts = {};
    let individualWords = paragraph.split(/[ ,]+/);
    // track the most common word
    let max = 0, maxWord = individualWords[0]; 
    for (let word of individualWords) {
        word = sanitize(word);

        // only count if it isn't banned!
        if (!(banned.indexOf(word) > -1)) {
            let count = wordCounts[word];
            if (!count) {
                count = 0;
            }
            wordCounts[word] = ++count;
            if (count > max) {
                max = count;
                maxWord = word;
            }
        }
    }
    
    return maxWord;
};

// deletes all whitespace and punctuation and conver to lower case
function sanitize(string) {
    return string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
}
