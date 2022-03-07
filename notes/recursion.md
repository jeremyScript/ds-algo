# Recursion

## When It's Useful

If you find yourself defining your problem into smaller versions of the same repeating problem, it's probably a good indication that recursion could be useful there.

## Fibonnaci Example

A fibonacci number is a number that is defined as the sum of the previous two previous fibonacci numbers starting with 1 and 1 as the first two numbers. So `fibonacci(3)` is equal to `fibonacci(2)` + `fibonacci(1)`. To generalize this, `fibonacci(n)` = `fibonacci(n - 1)` + `fibonacci(n - 2)`. This is a recursively defined problem.

The first question is almost always: what is the ***base case***? The base case is when we stop recursing. If we don't have a base, we will get a stack overflow when we run out of memory. In our case, the base case will be `fibonacci(1) = 1` and `fibonacci(2) = 1`.

```
function fibonacci(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

![image](https://user-images.githubusercontent.com/87665319/156851147-664bc664-60bc-40a5-a447-21c8f25e1cce.png)

Since recursive functions will break down into further recursive calls, all of them eventually eventually end in a base case. In the `fibonacci(5)` call, you can see eventually all of them end up in n either equalling 2 or 1, our base case.

So what if we call `fibonacci(30)`? The answer is 832040. You guessed it, we add 1 to itelf, 832040 times.

Not very efficient here, but very elegant code. Here you'd need to trade off having readable code versus a relatively poor performance profile. If your use case says you'll only need to call no more than with n = 10, yeah, this is probably okay. If you need to call it with n = 200, you need to rewrite it to something different.

An iterative solution:

```
function fibonacci(n) {
  const sequence = [1, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  
  return sequence[n - 1];
}
```

## Nested Addition Example

Given an array in which each element is either a number, array of numbers or further nested arrays of numbers, write a function that would add up and return all the numbers within the array regardless of how nested they are.

e.g., `[1, [2, 3], [4, [5], [6, 7, [8, 9, [10]]]]]`

First attempt:

```
function nestedAddition(arr) {
  let sum = 0;

  function iterateAndBreakItDown(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        sum += arr[i];
      } else {
        iterateAndBreakItDown(arr[i]); 
      }
    }
  }
  iterateAndBreakItDown(arr);
  return sum;
}
```

Refactored:

```
function nestedAddition(arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' {
      sum += arr[i];
    } else {
      sum += nestedAddition(arr[i]);
    }
  }
  
  return sum;
}
```
