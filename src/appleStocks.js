/*
Write an efficient function that takes stockPricesYesterday and returns the best
profit I could have made from one purchase and one sale of one share of Apple
stock yesterday.

For example:

  const stockPricesYesterday = [10, 7, 5, 8, 11, 9];
  getMaxProfit(stockPricesYesterday);
  // Returns 6 (buying for $5 and selling for $11)

  No "shorting" — you need to buy before you can sell. Also, you can't buy and
  sell in the same time step—at least 1 minute has to pass.
*/

// Solution
// O(n) time and O(1) space

/**
 * @name getMaxProfit
 * @param {array} stockPrices - An array of stock prices.
 * @returns {number} A number representing the maximum profit.
 */

export const getMaxProfit = (stockPrices) => {
  let bestBuyPrice;
  let bestSellPrice;
  // Temporarily assign extreme values
  let maxProfit = -Infinity;
  let lowestPrice = Infinity;

  // Compare and update values at each iteration to get maxProfit
  for (let currPrice of stockPrices) {
    let currProfit = currPrice - lowestPrice;
    if (currProfit > maxProfit) {
      maxProfit = currProfit;
      // Prices that produce the maximum profit
      bestBuyPrice = lowestPrice;
      bestSellPrice = currPrice;
    }
    lowestPrice = Math.min(lowestPrice, currPrice);
  }

  return [maxProfit, bestBuyPrice, bestSellPrice];
};
