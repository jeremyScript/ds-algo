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

One of the most efficient sorting algorithms.

### The Algorithm

Break a given array into two smaller arrays. Break those arrays again into yet smaller arrays. Repeat until you have arrays with a single element. By definition, an array of one element is already sorted. Now, merge each pair of the arrays back together, sorting as we go. We'll take those two smaller sroted arrays and combine them back into one larger sorted array. And then, repeat with the bigger arrays until we've merged them all back into one sorted array.

```
mergeSort([1, 5, 7, 4, 2, 3, 6]) -- depth 0

mergeSort([1, 5, 7, 4]) // mergeSort([2, 3, 6]) -- depth 1

mergeSort([1, 5]) // mergeSort([7, 4]) -- depth 2

mergeSort([1]) // mergeSort([5]) -- depth 3
[1] is of length one. Base case. Return sorted list [1] -- depth 3

mergeSort([5]) -- depth 3
[5] is of length one. Base case. Return sorted list [5] -- depth 3

merge([1], [5]) -- depth 3
Is 1 or 5 smaller? 1. Add to end. [1]
Left array is empty, concat right array. [1, 5]
Return sorted array [1, 5].

mergeSort([7, 4]) -- depth 2

mergeSort([7]) // mergeSort([4]) -- depth 3
[7] is of length one. Base case. Return sorted list [7] -- depth 3

mergeSort([4]) -- depth 3
[4] is of length one. Base case. Return sorted list [4] -- depth 3

merge([7], [4]) -- depth 3
Is 7 or 4 smaller? 4. Add to end. [4]
Right array is empty, concat left array. [4, 7]
Return sorted array [4, 7]

merge([1, 5], [4, 7]) -- depth 2
Is 1 or 4 smaller? 1. Add to end. [1]
Is 5 or 4 smaller? 4. Add to end. [1, 4]
Is 5 or 7 smaller? 5. Add to end. [1, 4, 5]
Left array is empty, concat right array. [1, 4, 5, 7]
Return sorted array [1, 4, 5, 7]

mergeSort([2, 3, 6]) -- depth 1

mergeSort([2, 3]) // mergeSort([6]) -- depth 2

mergeSort([2]) // mergeSort([3]) -- depth 3
[2] is of length one. Base case. Return sorted list [2]

mergeSort([3]) -- depth 3
[3] is of length one. Base case. Return sorted list [3]

merge([2], [3]) -- depth 3
Is 2 or 4 smaller? 2. Add to end. [2]
Left array is empty, concat right array. [2, 3]
Return sorted array [2, 4]

mergeSort([6]) -- depth 2
[6] is of length one. Base case. Return sorted list [6]

merge([2, 3], [6]) -- depth 2
Is 2 or 6 smaller? 2. Add to end. [2]
Is 3 or 6 smaller? 3. Add to end. [2, 3]
Left array is empty, concat right array. [2, 3, 6]
Return sorted array [2, 3, 6]

merge([1, 4, 5, 7], [2, 3, 6]) -- depth 1
Is 1 or 2 smaller? 1. Add to end. [1]
Is 4 or 2 smaller? 2. Add to end. [1, 2]
Is 4 or 3 smaller? 3. Add to end. [1, 2, 3]
Is 4 or 6 smaller? 4. Add to end. [1, 2, 3, 4]
Is 5 or 6 smaller? 5. Add to end. [1, 2, 3, 4, 5]
Is 7 or 6 smaller? 6. Add to end. [1, 2, 3, 4, 5, 6]
Right array is empty, concat left array. [1, 2, 3, 4, 5, 6, 7]
Return sorted list [1, 2, 3, 4, 5, 6, 7]
```

![image](https://user-images.githubusercontent.com/87665319/157129537-f1f8b742-435c-4707-a558-ab7530a9fb31.png)


### Caveat

You can do this by writing two separate functions: one that breaks down the array into smaller arrays (via recursion) and the other one that takes two sorted arrays and returns one sorted array. The reason you want to separate it into two smaller functions is 1) it's easier to unit test (e.g., `merge` separate from `mergeSort`) and 2) each function should really just do one thing.

### The Code

```
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  
  const halfLen = Math.floor(arr.length / 2);
  
  const arrA = arr.slice(0, halfLen);
  const arrB = arr.slice(halfLen);
  
  return merge(mergeSort(arrA), mergeSort(arrB));
  
  function merge(arr1, arr2) {
    const merged = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length || j < arr2.length) {
      if (arr1[i] < arr2[j] || arr2[j] === undefined) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
    
    return merged;
  }
}
```

### Big O

Every case is the worst case scenario. And the best. And the average. No matter what, the array always gets broken down into lists of 1 and then built back up. 

Let's about the Big O then. Every item in the array will be looked at least once. So that means that we're going to be at least O(n). Then we need to compare those items to other items in the array. But how many times? Does it diminish as the list gets longer or not? It turns out it does diminish.

Notice that the 1 in our example never gets compared to the 7 in the array. How? Well, when the array breaks down into smaller pieces, the 7 gets put in a group with 4. The 1 does get compared at one point to the 4 and gets sorted before the 4. We, by virtue of knowing that everything after 4 in that list larger than 4, don't need to compare 1 to each of those numbers. We get to take a short cut. So, as our array grows larger and larger, we get to take more and more shortcuts. This the hallmark of a log n sort of behavior: the larger the list gets, we get diminishing amounts of more things to do.

So let's combine our two terms together. This sort's computational complexity is O(n log n). And that's the best average/worst case for a general purpose sort that we're going to get. This will definitely be significantly faster than the O(n²) we've been seeing so far on larger lists.

What about spatial complexity? Notice we're creating and throwing away a lot of array. This isn't free, and on a large list can be a problem. Merge sort is among the worst because we'll create an array for every item in the array (plus a few more which would just be a coefficent so Big O wouldn't care) so the spatial complexity is O(n).

## 4. Quick Sort

### Overview
One of the most useful and efficient sorting algorithms. It's an algorithm that takes a divide-and-conquer, recursive approach.

### The Algorithm
Take the last element in the array and call it the pivot. Everything that's smaller than the pivot gets put into the left array and everything that's greater gets put in the right array. You then call the function on the left and right arrays independently recursively. After those sorted arrays come back, concatenate the left array, the pivot, and the right array (in that order). The base case is when you have an array of length 1 or smaller, in which case, you'd simply return the given array.

```
[4,9,3,5] list
-> 5 is made the pivot since it's the last in the array
-> divide list into two lists, [4,3] and [9]
-> call quicksort on those two lists

[4, 3]
-> 3 is pivot
-> call quicksort on [] and [4]
-> those both return as is as they are the base case of length 0 or 1
-> concat [], 3, and [4]
-> return [3,4]

[9]
-> returns as this it is a base case of length 1

(back into the original function call)
-> call concat on [3,4], 5, and [9]
-> return [3,4,5,9]
```

### Caveat
There are other tricks around the pivot that we can do to mitigate our worst case scenarios. The most common is called quicksort3 where you take the first element, the middle element, and the last element and takes the middle value as the pivot, guaranteeing at least that your pivot isn't the smallest or biggest element. It does add a few more comparisons to your sort so it does add overhead but at the benefit basically removing the worst case scenario. Others will just choose a random pivot each time. Most of the variations revolve around pivots.

### The Code

```
function quickSort(arr) {
  if (arr.length < 2) return arr;
  
  const arrA = [];
  const arrB = [];
  const pivot = arr[arr.length - 1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      arrA.push(arr[i]);
    } else {
      arrB.push(arr[i]);
    }
  }

  return [...quickSort(arrA), pivot, ...quickSort(arrB)];
}
```

### Big O

What is the worst case for quick sort? A sorted list. The pivot would always be the largest number in the array, meaning the left array would always be full and the right array would always be empty. In order for us to get that log n magic instead of just n, we need to be able to skip some comparisons. If it's sorted, we will compare every number against every other so we'd end up with O(n²). Same would apply with a reverse-sorted list.

What's the best case scenario? It's actually the same the average case scenario: a randomly sorted list. That way the pivots will tend to be more in the middle so we'll get a good mix in our left and right arrays which is where that log n magic comes in. In these cases, it'll be O(n log n) like merge sort.

What about spatial complexity? In the way that I'm going to have you do it, it'll be O(n). We'll be creating new arrays for each recursive call. This makes quick sort more clear to understand and for now that's what we're optimizing for: the actual algorithmic thinking.

It is possible to implement quick sort as a destructive sort that operates in-place and uses some other tricks like tail call optimization. In this case its spatial complexity will be O(log n) as will still make some memory allocations on the call stack, but far fewer than merge sort does. For this reason, the spatially-effecient version of quick sort will frequently be favored over merge sort due to its lesser memory footprint.



## Topic
### Overview
### The Algorithm
### Caveat
### The Code
### Big O
