// Write a function that reverses a string. The input string is given as an array of characters s.

func reverseString(s []byte)  {
    begin := 0
    end := len(s) - 1
    for end >= begin {
        temp := s[begin]
        s[begin] = s[end]
        s[end] = temp
        begin++
        end--
    }
}
