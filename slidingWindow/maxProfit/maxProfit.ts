function maxProfit(prices: number[]): number {
    let lowestPrice = prices[0],
        maxProfit = 0;
    
    prices.forEach(price => {
        lowestPrice = Math.min(price, lowestPrice);
        const currentProfit = price - lowestPrice;
        maxProfit = Math.max(currentProfit, maxProfit);
    });
    
    return maxProfit;
};
