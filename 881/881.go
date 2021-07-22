// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

func firstUniqChar(s string) int {
    m := buildMap(s)
    return findFirstUniq(s, m)
}

func buildMap(s string) map[byte]int {
    chars := make(map[byte]int)
    i := 0
    for i < len(s) {
        count := chars[s[i]]
        count++
        chars[s[i]] = count
        i++
    }
    return chars
}

func findFirstUniq(s string, m map[byte]int) int{
    i := 0
    for i < len(s) {
        if m[s[i]] == 1 {
            return i
        }
        i++
    }
    return -1
}
