// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }
    sMap := toMap(s)
    tMap := toMap(t)
    return mapsAreEqual(sMap, tMap)
}

func toMap (s string) map[byte]int {
    asMap := make(map[byte]int)
    for i := 0; i < len(s); i++ {
        currentChar := s[i]
        count := asMap[currentChar]
        count++
        asMap[currentChar] = count
    }
    return asMap
}

func mapsAreEqual(s map[byte]int, t map[byte]int) bool {
    for k, v := range(s) {
        if t[k] != v {
            return false
        }
    }
    return true
}
