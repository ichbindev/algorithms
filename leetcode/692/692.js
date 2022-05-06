/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const counts = new Map();
    for (let word of words)  {
        const count = counts.get(word) || 0;
        counts.set(word, count + 1);
    }
    const distinctWords = [ ...counts.keys()];
    distinctWords.sort((a, b) => {
       return counts.get(a) === counts.get(b) ? 
            a.localeCompare(b)
            : counts.get(b) - counts.get(a);
    });
    return distinctWords.slice(0, k);
};
