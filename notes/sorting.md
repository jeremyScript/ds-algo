# Sorting

## 1. Bubble Sort

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

On the first runthrough, you will find the biggest (or smallest) number moved to the last - in its final correct spot. This means that on the second and subsequent runthroughs, you do not have to check whether those biggest (or smallest) numbers are out of order since they already are. This saves one fewer check each iteration. This is an example of optimization.

### The Code

```
function bubbleSort(nums) {
  let hasSwapped = false;
  let iterationsLeft = arr.length;
  
  do {
    hasSwapped = false;
    for (let i = 0; i < iterationsLeft - 1; i++) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      hasSwapped = true;
    }
    iterationsLeft -= 1;
  } while (hasSwapped);
  
  return arr;
}
```

### Big O

Talk abou the worst, best, and average case:

What is the absolute best case for this algorithm? A sorted list. It'd run through the list once, comparing each element to its neighbor once, not swap anything, and be done. In our list of five that would be four comparisons and no swaps. Best case here is O(n) since the best case is just one run through so it'd grow linearly.

What is the absolute worst case scenario? It'd be a backwards sorted list. Then it'd have to run all comparisons and always swap. Assuming we did the optimized version above, that'd be 4 comparisons and swaps on the first go-around, then 3, then 2, then 1, totalling 10 comparisons and swaps. This will grow exponentially as the list gets bigger. This would be O(n²).

Okay, so average case. You can think of average case as "what happens if we through a randomly sorted list at this". For our bubble sort, it'd be like the one we did above: some numbers in order, some not. What happens if we through 10 at it versus 1000. The amount of comparisons and swaps would grow exponentially. As such, we'd say it's O(n²) as well.

What about the spatial complexity? In our case, we're operating on the array itself and not creating anything else in memory, so the spatial complexity of this is O(1) since it'd never grow. Because we are operating on the array itself, we'd say this sort is *destructive*. What if you needed to keep the original array in addition to the sorted one? You couldn't use this sorting method or you'd have to pre-emptively make a copy. Other sorting algorithms are non-destructive.

Is this sorting algorithm *stable*? To be considered a stable sort, the sort must guarantee that if two things are equal that that they stay in that same order. For example, if we have an array of users that looks like this: `[{state: "CO", name: "Sarah Drasner"}, {state: "CA", name: "Shirley Wu"}, {state: "CA", name: "Scott Moss"}]` and we're sorting by state, we'd have to guarantee that Shirley comes before Scott for the sort to be considered stable. Sometimes this is important to you, sometimes you don't care. So is bubble sort stable? Yes, it'll guarantee that equivalent items come back in the order they were in.

## Topic
### Overview
### The Algorithm
### Caveat
### The Code
### Big O
