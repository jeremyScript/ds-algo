# Binary Search

## Overview

Search is the act of looking for a particular element in an array. This ends up being quite similar to sorting in practice.

There are largely two common ways of doing search: linear search and binary search. The former is the simplest and really only useful if the array is not alrady sorted in any particular way. You just go through the array starting with the 0th element and ask if it is the element you're looking for. Its time complexity is O(n).

Binary search is a bit more interesting. It only works if the array is already sorted. Imagine how you go about finding a name in a phone book. A telephone book is a sorted list of names. You'll open the book more or less to the middle (or say you do, for argument's sake.) From there, if the name you're looking for is smaller/earlier in the alphabet, you'll go halfway to the smaller/earlier side of the book, and continue doing so until eventually you land on the name you're looking for.

## The Algorithm

```
[0, 5, 10, 12, 15, 19, 21, 22, 24, 30]

search for 12

start in the middle, is 19 === 12? no, smaller, go left

look in the middle of the smaller half, 10 === 12? no, larger, go right

look in the middle of the larger half (which is now just one number), is 12 === 12? yes, found element
```

## The Code

```
function binarySearch(arr, target) {
  let i = 0;
  let j = arr.length;
  
  do {
    let mid = Math.floor((j - i) / 2) + i);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) i = mid + 1;
    else j = mid;
  } (i < j);
  
  return -1;
}

// Recursive

function recBinarySearch(array, target) {
  return (function recurse(l, r) {
    let m = Math.floor((r + l) / 2);
    
    if (array[m] === target) return m;
    else if (l >= r) return -1;
  
    if (array[m] > target) return recurse(l, m);
    else return recurse(m + 1, r);
  })(0, array.length);
}
```

## Big O

The worst case scenario is when the target is not found in which case it would be O(log n). Just think how many times you'd have to split the array in half until you can't anymore. n = 2<sup>x</sup>, log<sub>2</sub> n = x.

The spatial complexity is O(1);
