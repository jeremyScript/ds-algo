# Linked List

LinkedList is made of a bunch of nodes that point to the next one in the list.

An item in a linked list is called a node. The first node is called the head. The last node is called the tail.

Every node has two or more properties, namely the value and a pointer to the next node in the list.

Picture a linked list like a chain of paperclips linked together. It's quick to add another paperclip to the top or bottom. It's even quick to insert one in the middle—just disconnect the chain at the middle link, add the new paperclip, then reconnect the other half.

Unlike an array, consecutive items in a linked list are not necessarily next to each other in memory. However, the advantage here is that adding or deleting things will be easy since we don't have to do shifting or collapsing as we do with ArrayList.

The Big O for lookups will be O(n).

Where are LinkedLists useful? Any time you need to do lookups, insertions and deletions. The Big O for insertions and deletions will be O(1).

```
value: [a]   [b]   [c]   [d]
next:  [ ]-> [ ]-> [ ]-> [ ]-> null

-> delete is called on index 2 (value 'c')
-> grab the head (value 'a')
-> loop through the nexts until you get the index
   before the one to be deleted (value 'b')
-> change the the next of index 1 to be the next of index 2
-> decrement length
-> return the value of the deleted node
```

There are other variations of LinkedLists as well. One is a doubly LinkedList, where you have a previous and next pointer on each node. This can be helpful if you want to be able to do lookups from the tail or from the head.

## Summary

### Strengths:

- Fast operations on the ends. Adding elements at either end of a linked list is O(1)O(1). Removing the first element is also O(1)O(1).
- Flexible size. There's no need to specify how many elements you're going to store ahead of time. You can keep adding elements as long as there's enough space on the machine.

### Weaknesses:

- Costly lookups. To access or edit an item in a linked list, you have to take O(i)O(i) time to walk from the head of the list to the iith item.

### Uses:
- Stacks and queues only need fast operations on the ends, so linked lists are ideal.
