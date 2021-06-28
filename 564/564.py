class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit, i = 0, 0
        while i < len(prices) - 1:
            low = prices[i]
            while i < len(prices) - 1 and prices[i + 1] <= low:
                i += 1
                low = prices[i]
            high = prices[i]
            while  i < len(prices) - 1 and prices[i + 1] >= high:
                i += 1
                high = prices[i]
            profit += high - low
            i += 1
        return profit
