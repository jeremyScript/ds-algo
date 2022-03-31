# Greedy Algorithms

Example:

You are the banker in Monopoly with your family who has lost many of the game pieces so you only have bills in these denominations: 

- $5
- $10
- $25 

You need only pay out your family in the least number of bills possible so you don't run out before the game is over. Write a function that calculates the least number of bills required for any given dollar amount that is divisible by 5.

```
// Recursive solution

function fewestBills(payout) {
  if (payout % 5 !== 0) return;
  
  const payment = {
    25: 0,
    10: 0,
    5: 0
  }
  
  let remaining = payout;

  return deductBy(25) || deductBy(10) || deductBy(5) || payment;

  function deductBy(amount) {
    if (remaining - amount < 0) {
      return;
    } else {
      payment[amount]++;
      remaining -= amount;
      deductBy(amount);
    }
  }
}

// Non-recursive solution

function fewestBills(bills, amount) {
  const sorted = bills.sort((a, b) => b - a);
  
  let remaining = amount;
  let i = 0;
  
  const payout = {};
  
  while (remaining > 0) {
    if (sorted[i] <= remaining) {
      remaining -= sorted[i];
      payout[sorted[i]]
        ?  payout[sorted[i]]++
        : payout[sorted[i]] = 1;
    } else {
      i++;
    }
  }

  return payout;
}
```
