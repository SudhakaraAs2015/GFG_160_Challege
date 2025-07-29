function stockBuyAndSell(prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}
const prices = [100, 180, 260, 310, 40, 535, 695];
console.log(stockBuyAndSell(prices));
// TC =O(n)
// SC = O(1)
