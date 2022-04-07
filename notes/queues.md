# Queues

![image](https://user-images.githubusercontent.com/87665319/162286370-ec3d4be4-1ce1-4b63-8d5b-414e1f219391.png)

## Overview

A queue is a type of list where data are inserted at the end and are removed from the front (FIFO). Queues are used to store data in the order in which they occur, as opposed to stacks. Think of a queue like the line at the bank.

A queue is used to order processes submitted to an operating system or a print spooler.

## Queue Operations

- enqueue O(1)
- dequeue O(1)
- peek O(1)
- length
- clear

Strengths:
- Fast operations. All queue operations take O(1) time.

Uses:
- Breadth-first search uses a queue to keep track of the nodes to visit next.
- Printers
- Web servers
- Processes

## Implementation

Queues are easy to implement with linked lists:

- To enqueue, insert at the tail of the linked list.
- To dequeue, remove at the head of the linked list.

You could implement a queue with an array or dynamic array, but it would get kinda messy. Try drawing it out. You'll notice that you'd need to build out a "scoot over" or "re-center" operation that automatically fires when your queue items hit the bottom edge of the array.
