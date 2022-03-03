# Sorting

## Bubble Sort

It matches the human mental model of sorting pretty well.

The algorithm is simple:
- Compare two items in an array that are next to each other.
- If they're out of order, swap them.
- Then, move forward one index, compare again, swap if needed, and continue to the next item in the array.
- Once the end of the array is reached, if we've swapped anything in the previous run through, the array *could* still be out of order, so pass through it again.
- Once we run through the whole arrray with no swaps, the array is sorted.
