/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
    const output = []
    //for each word in A
    for (const word of A) {
        let passing = true;
        // for each string in the B
        for (let i = 0; i < B.length && passing; i++) {
            passing = isSubset(word, B[i]);
        }
        // add word to output
        if (passing) {
            output.push(word);
        }
    }
        
    return output;
};

function isSubset(word, chars) {
    // for each letter in an element of B
                // find if that letter is in A copy
                // remove it w/ substrings
                // if it fails move on to next word
    for (let letter of chars) {
        const indexOfLetter = word.indexOf(letter)

        // if indexOfLetter !== -1 but bit stuff because why not
        if (~indexOfLetter) {
            word = word.substring(0, indexOfLetter) + word.substring(indexOfLetter + 1);
        } else {
            return false;
        }
    }
    return true;
}
