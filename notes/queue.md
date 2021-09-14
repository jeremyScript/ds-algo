# Queue

## Data Structure

A queue stores items in a first-in, first-out (FIFO) order, sort of like at a grocery store waiting in line to get checked out.

## Time & space complexities (worst cases):

- space O(n)
- enqueue O(1)
- dequeue O(1)
- peek O(1)

A queue's strength lies in its fast operations. ALL queue operations take O(1) time.

##Uses

- Breadth-first search uses a queue to keep track of the nodes to visit next.
- Printers use queues to manage jobs - jobs get printed in the order they're submitted.
- Web servers use queues to manage requests.
- Processes wait in the CPU scheduler's queue for their turn to run.

## Implementation

Queues are easy to implement with linked lists:

- To enqueue, insert at the tail of the linked list.
- To dequeue, remove at the head of the linked list.

You could implement a queue with an array or dynamic array, but it would get kinda messy. Try drawing it out. You'll notice that you'd need to build out a "scoot over" or "re-center" operation that automatically fires when your queue hits the bottom edge of the array.
