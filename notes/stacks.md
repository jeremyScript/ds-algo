# Stacks
(Sources: interviewcake.com, Cracking the Code Interview)

![image](https://user-images.githubusercontent.com/87665319/161819666-231d3c99-e54d-4e9a-803d-411864feaca7.png)

## Data Structure

A stack stores items in a last-in, first-out (LIFO) order. Think of a pile of dirty plates in your sink.

It uses the following operations:
- `pop()`: remove the top item from the stack.
- `push(item)`: Add an item to the top of the stack.
- `peek()`: Return the top of the stack.
- `isEmpty()`: Return `true` if and only if the stack is empty.

## Time & space complexities (worst cases):

- space O(n)
- push O(1)
- pop O(1)
- peek O(1)

A stack's strength lies in its fast operations. ALL stack operations take O(1) time (as it doesn't require shifting elements around).

Unlike an array, however, a stack does not offer constant-time access to the ith item.

## Uses

- The call stack is a stack that tracks function calls in a program. When a function returns, which function do we "pop" back to? The last one that "pushed" a function call.
- Depth-first search uses a stack (sometimes the call stack) to keep track of which nodes to visit next.
- String parsing—stacks turn out to be useful for several types of string parsing.

One case where stacks are often useful is in certain recursive algorithms. Sometimes, you need to push temporary data onto a stack as you recurse, but then remove them as you backtrack. A stack can also be used to implement a recursive algorithm iteratively.

## Implementation

You can implement a stack with either a linked list or a dynamic array as they both work pretty well:

- Linked lists
  - Stack push: insert at head
  - Stack pop: remove at head
- Dynamic arrays
  - Stack push: append
  - Stack pop: remove last element
