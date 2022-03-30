# Memoize

Caching value pairs (e.g., inputs & outputs) that have been computed previously.

```
// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10

const times10 = (n) => n * 10;
```

```
// Task 2: Use an object to cache the results of your times10 function.

const cache = {};

const times10Memoized = (n) => {
  if (n in cache) {
    return cache[n];
  } else {
    const result = times10(n);
    cache[n] = result;
    return result;
  }
}
```

```
// Task 3: Clean up your global scope by moving your cache inside your function.

const times10MemoizedAndClosed = () => {
  const cache = {};
  
  return (n) => {
    if (n in cache) {
      return cache[n];
    } else {
      const result = times10(n);
      cache[n] = result;
      return result;
    }
  }
}
```

```
// Task 4: Make your memo function generic and accept the times10 function as a 
// callback rather than defining the n * 10 logic inside the if/else or pulling it
// in from the global scope.

const times10 = (n) => n * 10;

const memoized = (cb) => {
  const cache = {};
  
  return (n) => {
    if (n in cache) {
      return cache[n];
    } else {
      const result = cb(n);
      cache[n] = result;
      return result;
    }
  }
};

```

