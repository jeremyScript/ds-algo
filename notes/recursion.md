# Recursion

## When It's Useful

If you find yourself defining your problem into smaller versions of the same repeating problem, it's probably a good indication that recursion could be useful there.

Fibonnaci example:

A fibonacci number is a number that is defined as the sum of the previous two previous fibonacci numbers starting with 1 and 1 as the first two numbers. So `fibonacci(3)` is equal to `fibonacci(2)` + `fibonacci(1)`. To generalize this, `fibonacci(n)` = `fibonacci(n - 1)` + `fibonacci(n - 2)`. This is a recursively defined problem.

The first question is almost always: what is the ***base case***? The base case is when we stop recursing. If we don't have a base, we will get a stack overflow when we run out of memory. In our case, the base case will be `fibonacci(1) = 1` and `fibonacci(2) = 1`.

```
function fibonacci(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

![image](https://user-images.githubusercontent.com/87665319/156851147-664bc664-60bc-40a5-a447-21c8f25e1cce.png)
