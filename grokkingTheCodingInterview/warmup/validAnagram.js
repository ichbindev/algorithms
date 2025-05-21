/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/
class Solution {
  increment(map, item) {
    const count = map[item] || 0;
    map[item] = count + 1;
  }

  isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const sMap = {},
          tMap = {};
    for (let i = 0; i < s.length; i++) {
      this.increment(sMap, s[i]);
      this.increment(tMap, t[i]);
    }
    if (Object.keys(sMap).length !== Object.keys(tMap).length) return false;
    for (const key in sMap) {
      if (sMap[key] !== tMap[key]) return false;
    }
    return true;
  }
};

// solution with only one map, checks parity
class Solution2 {
  letterMap = {}

  update(key, updateValue = 1) {
    const { letterMap } = this;
    const newCount = (letterMap[key] || 0) + updateValue;
    if (newCount !== 0) {
      letterMap[key] = newCount;
    } else {
      delete letterMap[key];
    }
  }

  isAnagram(s, t) {
    const { letterMap } = this;
    if (s.length !== t.length) return false;

    // use the same map to count, increment for s and decrement for t
    // delete the key if count is at 0
    for (let i = 0; i < s.length; i++) {
      this.update(s[i]);
      this.update(t[i], -1);
    }

    // if there are any keys left, then the count of that character was
    // not even in s and t, and thus it's not an anagram
    return Object.keys(letterMap).length === 0;
  }
};
