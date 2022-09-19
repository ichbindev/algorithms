/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/
function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineAsDict = magazineToDict(magazine);
  return removeNoteFromMagazine(ransomNote, magazineAsDict);
};

function magazineToDict(magazine: string): {[key: string]: number} {
  const dict: {[key: string]: number} = {};
  for (let c of magazine) {
      let count = dict[c] || 0;
      dict[c] = ++count;
  }
  return dict;
}

function removeNoteFromMagazine(note: string, dict: {[key: string]: number}): boolean {
  for (let c of note) {
      if (!dict[c]) {
          return false;
      }
      const newCount = dict[c] - 1;
      if (newCount === 0) {
          delete dict[c];
      } else {
          dict[c] = newCount;
      }
  }
  return true;
}