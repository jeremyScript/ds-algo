import expectExport from "expect";
import { getMaxProfit } from "../src/appleStocks";

test("stock price is rising", () => {
  const stockPrices = [1, 3, 4, 7, 8, 11];
  expect(getMaxProfit(stockPrices)).toEqual([10, 1, 11]);
});

test("stock price is falling", () => {
  const stockPrices = [10, 8, 5, 2, 1];
  expect(getMaxProfit(stockPrices)).toEqual([-1, 2, 1]);
});

test("price fluctuates", () => {
  const stockPrices = [3, 2, 5, 4, 7, 5, 8, 1, 4];
  expect(getMaxProfit(stockPrices)).toEqual([6, 2, 8]);
});

test("price stays constant", () => {
  const stockPrices = [10, 10, 10, 10, 10];
  expect(getMaxProfit(stockPrices)).toEqual([0, 10, 10]);
});
