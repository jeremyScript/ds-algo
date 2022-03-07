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
  let hasSwapped;
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

## 2. Insertion Sort

### Overview

Occasionally used in certain contexts.

### The Algorithm

- Start by assuming that the first element of the list is already sorted.
- Iterate through the list starting with the second element of the list.
- With each iteration, compare the current element with the the element before it and determine whether it should be swapped or left alone. If it's left alone, go to the next iteration. If not, compare the current element to another element before it (from its swapped position from the previous operation). Continue this until it reaches the end or an element that is smaller (or bigger) than the current element.
- Continue this process through the end of the iteration.

### Caveat
### The Code

```
// 1st version
function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        j -= 1;
      } else {
        break;
      }
    }
  }
  return arr;
}

// Refactored version
function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr;
}
```

### Big O

What's the worst case scenario for this sort? A reverse sorted list. You'd have to make every comparison possible since the numbers would be moving from the end of the list to the beginning of the list every single iteration and have to move an item every single iteration. This would be O(n²)

What's the best case scenario? An already-sorted list. In this case, it would only make ask the question "is x the larger than y? Yes." It would never do any extra comparisons and it would never need to make any swaps. This would be O(n). This is when you would consider using insertion sort over something like quick sort or merge sort: if the arrays you're going to be sorting are likely to be sorted already or very close to it (a few swaps is cheap.) This will make it faster than quick sort and merge sort.

What's the average case of a randomly shuffled array? It'll still make a lot of comparisons and swaps, and those just grow exponentially as the array grows, so it'll still be O(n²). Not great for average-case use, only for nearly-sorted situations.

What about spatial complexity? O(1). We don't create any additional items for this sort.

The sort is destructive since we work on the array itself and the sort can be stable as long as you program it so that they stay in order during the insertions.

## 3. Merge Sort

### Overview

One of the most efficient sorting algorithm.

### The Algorithm

Break a given array into two smaller arrays. Break those arrays again into yet smaller arrays. Repeat until you have arrays with a single element. By definition, an array of one element is already sorted. Now, merge each pair of the arrays back together, sorting as we go. We'll take those two smaller sroted arrays and combine them back into one larger sorted array. And then, repeat with the bigger arrays until we've merged them all back into one sorted array.

### Caveat

You can do this by writing two separate functions: one that breaks down the array into smaller arrays (via recursion) and the other one that takes two sorted arrays and returns one sorted array.

### The Code
### Big O


## Topic
### Overview
### The Algorithm
### Caveat
### The Code
### Big O
