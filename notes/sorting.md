# Sorting

## Bubble Sort

### Overview

It matches the human mental model of sorting pretty well.

### The Algorithm

The algorithm is simple:
- Compare two items in an array that are next to each other.
- If they're out of order, swap them.
- Then, move forward one index, compare again, swap if needed, and continue to the next item in the array.
- Once the end of the array is reached, if we've swapped anything in the previous run through, the array *could* still be out of order, so pass through it again.
- Once we run through the whole arrray with no swaps, the array is sorted.

Example:

```
[1, 5, 4, 2, 3]

Are 1 and 5 out of order? No.
Are 5 and 4 out of order? Yes. Swap.

[1, 4, 5, 2, 3]

Are 5 and 2 out of order? Yes. Swap.

[1, 4, 2, 5, 3]

Are 5 and 3 out of order? Yes. Swap.

[1, 4, 2, 3, 5]

End of the array, did we swap anything? Yes. Loop again.
Are 1 and 4 out of order? No.
Are 4 and 2 out of order? Yes. Swap.

[1, 2, 4, 3, 5]

Are 4 and 3 out of order? Yes. Swap.

[1, 2, 3, 4, 5]

Are 4 and 5 out of order? No.
End of the array, did we swap anything? Yes. Loop again.
Are 1 and 2 out of order? No.
Are 2 and 3 out of order? No.
Are 3 and 4 out of order? No.
Are 4 and 5 out of order? No.
End of the array, did we swap anything? No. List is sorted.
```

### Caveat

- On the first runthrough, you will find the biggest (or smallest) number moved to the last - in its final correct spot. This means that on the second and subsequent runthroughs, you do not have to check whether those biggest (or smallest) numbers are out of order since they already are. This saves one fewer check each iteration. This is an example of optimization.

### The Code

### Big O



## Topic
### Overview
### The Algorithm
### Caveat
### The Code
### Big O
