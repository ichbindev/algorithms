/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

// O(n + m) time, O(m) additional space
function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineAsDict = magazineToDict(magazine);
  return validateNoteInMagazine(ransomNote, magazineAsDict);
};

// O(m), convert the magazine to a dictionary of char: count
function magazineToDict(magazine: string): {[key: string]: number} {
  const dict: {[key: string]: number} = {};
  for (let c of magazine) {
      const count = dict[c] || 0;
      dict[c] = count + 1;
  }
  return dict;
}

// O(n), remove each letter in the note from the magazine
function validateNoteInMagazine(note: string, dict: {[key: string]: number}): boolean {
  for (let c of note) {
      if (!dict[c]) {
          return false;
      }
      --dict[c]
  }
  return true;
}