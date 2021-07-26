/*
Given all three arrays, write a function to check that the orders are first-come,
first-served. All food should come out in the same order customers requested it.

Each customer order is represented as a unique integer.

As an example,

  Take Out Orders: [1, 3, 5]
  Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 4, 6, 5, 3]

would not be first-come, first-served, since order 3 was requested before
order 5 but order 5 was served first.

But,

  Take Out Orders: [1, 3, 5]
  Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 3, 5, 4, 6]

would be first-come, first-served.
*/

// Solution
// O(n) time and O(1) space

/**
 * @name isFirstComeFirstServed
 * @param {array} takeOutOrders - An array of numbers
 * @param {array} dineInOrders - An array of numbers
 * @param {array} servedOrders - An array of numbers
 * @returns {boolean} A boolean showing whether the orders were served correctly
 */

export const isFirstComeFirstServed = (
  takeOutOrders,
  dineInOrders,
  servedOrders
) => {
  // Throw an error if the number of orders served
  // do not match the sum of the orders placed
  if (servedOrders.length !== takeOutOrders.length + dineInOrders.length)
    throw new Error(
      "One or more orders are either missing or served incorrectly"
    );

  let takeOutOrderIndex = 0;
  let dineInOrderIndex = 0;

  // For each order, check if it matches the current
  // element in either takeOutOrders or dineInOrders
  for (let i = 0; i < servedOrders.length; i++) {
    if (servedOrders[i] === takeOutOrders[takeOutOrderIndex])
      takeOutOrderIndex++;
    else if (servedOrders[i] === dineInOrders[dineInOrderIndex])
      dineInOrderIndex++;
    else return false;
  }
  return true;
};
