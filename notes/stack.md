# Stack

## Data Structure

A stack stores items in a last-in, first-out (LIFO) order. Think of a pile of dirty plates in your sink.

## Time & space complexities (worst cases):

- space O(n)
- push O(1)
- pop O(1)
- peek O(1)

A stack's strength lies in its fast operations. ALL stack operations take O(1) time.

## Uses

- The call stack is a stack that tracks function calls in a program. When a function returns, which function do we "pop" back to? The last one that "pushed" a function call.
- Depth-first search uses a stack (sometimes the call stack) to keep track of which nodes to visit next.
- String parsing—stacks turn out to be useful for several types of string parsing.

## Implementation

You can implement a stack with either a linked list or a dynamic array as they both work pretty well:

- Linked lists
  - Stack push: insert at head
  - Stack pop: remove at head
- Dynamic arrays
  - Stack push: append
  - Stack pop: remove last element
