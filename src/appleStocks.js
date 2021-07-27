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

/**
 * @name getMaxProfit
 * @param {array} stockPrices - An array of stock prices.
 * @returns {number} A number representing the maximum profit.
 */

export const getMaxProfit = (stockPrices) => {
  let bestBuyPrice = stockPrices[0];
  let bestSellPrice = stockPrices[1];
  let maxProfit = bestSellPrice - bestBuyPrice;

  let lowestBuyPrice = stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    let currProfit = stockPrices[i] - lowestBuyPrice;
    if (currProfit > maxProfit) {
      maxProfit = currProfit;
      bestBuyPrice = lowestBuyPrice;
      bestSellPrice = stockPrices[i];
    }
    lowestBuyPrice = Math.min(lowestBuyPrice, stockPrices[i]);
  }

  return [maxProfit, bestBuyPrice, bestSellPrice];
};
