import { isFirstComeFirstServed } from "../src/checkCafeOrders";

test("there is no order in one of the categories", () => {
  const takeOutOrders = [];
  const dineInOrders = [2, 4, 6];
  const servedOrders = [2, 4, 6];
  expect(
    isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders)
  ).toBe(true);
});

test("is first-come, first-served", () => {
  const takeOutOrders = [1, 3, 5, 7];
  const dineInOrders = [2, 4, 6];
  const servedOrders = [1, 2, 3, 5, 4, 6, 7];
  expect(
    isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders)
  ).toBe(true);
});

test("is not first-come, first-served", () => {
  const takeOutOrders = [1, 3, 5, 7];
  const dineInOrders = [2, 4, 6];
  const servedOrders = [2, 1, 4, 6, 5, 3, 7];
  expect(
    isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders)
  ).toBe(false);
});

test("throws when order counts do not match", () => {
  const takeOutOrders = [1, 3, 5];
  const dineInOrders = [2, 4, 6];
  const servedOrders = [1, 2, 3, 5, 4, 6, 7];
  expect(() =>
    isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders)
  ).toThrow();
});
