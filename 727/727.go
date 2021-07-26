func removeDuplicates(nums []int) int {
    if len(nums) == 0 { 
        return 0
    }
    
    current, swap := 0, 0
    for swap < len(nums) {
        if nums[current] != nums[swap] {
            current++
            temp := nums[current]
            nums[current] = nums[swap]
            nums[swap] = temp
        }
        swap++;
    }
    return current + 1
}
