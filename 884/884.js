/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    // save a store for the counts
    const counts = {};
    // fill in the dict with word counts
    getWordCounts(A, counts);
    getWordCounts(B, counts);

    // find the words that only appear once
    return getUncommonWords(counts);
};
         
// SIDE EFFECT! fills in the countStore
// this is done instead of returning the store to save
// needing to resolve merge collissions 
function getWordCounts(sentence, countStore) {
    const splitSentence = sentence.split(" ");
    for (const word of splitSentence) {
        let count = countStore[word];
        if (!count) {
            count = 0;
        }
        countStore[word] = ++count;
    }
}

// create a list of everything with a count of 1
function getUncommonWords(wordCounts) {
    const uncommon = [];
    for (const word in wordCounts) {
        if (wordCounts[word] === 1) {
            uncommon.push(word);
        }
    }

    return uncommon;
}
