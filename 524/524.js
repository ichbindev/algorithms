/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    // build the map of length: [words] and find the longest word
    const lengthToWords = {};
    const longestWord = fillInWordLengthsAndGrabMax(lengthToWords, d);

    // start with the longest word length, go through all words
    // that match that length alphabetically
    for (let i = longestWord; i > 0; i--) {
        if (lengthToWords[i]) {
            lengthToWords[i].sort()
            for (let dictionaryWord of lengthToWords[i]) {
                // create copy of both words
                let startingWord = s;
                let dictionaryWordCopy = dictionaryWord;
                // while starting word copy still has chars
                while (startingWord) {
                    // find first index of first letter
                    const index = startingWord.indexOf(dictionaryWord[0]);
                    // if the last dictionaryWord letter is in the given word
                    // you've found it! return the full word
                    if (index >= 0 && dictionaryWord.length === 1) {
                        return dictionaryWordCopy;
                    }
                    if (index >= 0) {
                        // starting word becomes everything after found index
                        // dictionary word becomes everything after found character
                        dictionaryWord = dictionaryWord.substring(1);
                        startingWord = startingWord.substring(index + 1);
                    } else {
                        startingWord = ''; 
                    }

                }
            }
        }
    }
    return '';
};

// side effects ahoy
// fills in the passed in dictionary with { length: [words] }
// returns the length of the longest word
function fillInWordLengthsAndGrabMax(lengthMap, dictionary) {
    let longestWord = 0;
    for (const word of dictionary) {
        const length = word.length;
        if (length > longestWord) {
            longestWord = length;
        }
        if (!lengthMap[length]) {
            lengthMap[length] = [];
        }
        lengthMap[length].push(word);
    }
    return longestWord;
}
