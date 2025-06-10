// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      let node = this.root;
      for (let j = i; j < string.length; j++) {
        const c = string[j];
        if (!(c in node)) {
          node[c] = {};
        }
        node = node[c];
      }
      node[this.endSymbol] = true;
    }
  }

  contains(string) {
    let node = this.root;
    for (const c of string) {
      if (!(c in node)) {
        return false;
      } 
      node = node[c];
    }
    return (this.endSymbol in node);
  }
}

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;
