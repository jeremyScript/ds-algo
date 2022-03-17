# Linked List

LinkedList is made of a bunch of nodes that point to the next one in the list.

Every node has two or more properties, namely the value and a pointer to the next node in the list.

These nodes will NOT be sequential in memory, meaning we don't get the easy lookups, but the advantage here is that adding things will be easy since we don't have to do shifting or collapsing as we do with ArrayList.

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
