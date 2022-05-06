function isPrefixOfWord(sentence: string, searchWord: string): number {
    const sentenceArr: string[] = sentence.split(" ");
    for (let i = 0; i < sentenceArr.length; i++) {
        const word: string = sentenceArr[i];
        if (word.substring(0, searchWord.length) === searchWord) {
            return i + 1;
        }
    }
    return -1;
};