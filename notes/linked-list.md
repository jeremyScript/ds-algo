# Linked List

LinkedList is made of a bunch of nodes that point to the next one in the list.

An item in a linked list is called a node. The first node is called the head. The last node is called the tail.

Every node has two or more properties, namely the value and a pointer to the next node in the list.

Picture a linked list like a chain of paperclips linked together. It's quick to add another paperclip to the top or bottom. It's even quick to insert one in the middle—just disconnect the chain at the middle link, add the new paperclip, then reconnect the other half.

Unlike an array, consecutive items in a linked list are not necessarily next to each other in memory. However, the advantage here is that adding or deleting things will be easy since we don't have to do shifting or collapsing as we do with ArrayList.

## Not Cache-Friendly

Most computers have caching systems that make reading from sequential addresses in memory faster than reading from scattered addresses.

Array items are always located right next to each other in computer memory, but linked list nodes can be scattered all over.

So iterating through a linked list is usually quite a bit slower than iterating through the items in an array, even though they're both theoretically O(n)O(n) time.

## Complexities

### Worst Cases

space    O(n)

prepend	O(1)

append	O(1)

lookup	O(n)

insert	O(n)

delete	O(n)

Where are LinkedLists useful? Any time you need to append, prepend, insert or delete.

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

There are other variations of LinkedLists as well. One is a doubly LinkedList, where you have a previous and next pointer on each node. This can be helpful if you want to be able to do lookups from the tail or from the head. In a singly linked list, if you just had a pointer to a node in the middle of a list, there would be no way to know what nodes came before it. Not a problem in a doubly linked list.

## Summary

### Strengths:

- Fast operations on the ends. Adding elements at either end of a linked list is O(1)O(1). Removing the first element is also O(1)O(1).
- Flexible size. There's no need to specify how many elements you're going to store ahead of time. You can keep adding elements as long as there's enough space on the machine.

### Weaknesses:

- Costly lookups. To access or edit an item in a linked list, you have to take O(i)O(i) time to walk from the head of the list to the iith item.

### Uses:
- Stacks and queues only need fast operations on the ends, so linked lists are ideal.

### Big O:

#### Worst Cases

space    O(n)

prepend	O(1)

append	O(1)

lookup	O(n)

insert	O(n)

delete	O(n)

## Exercise

```
Name your class / constructor (something you can call new on) LinkedList

length - integer  - How many elements in the list
push   - function - accepts a value and adds to the end of the list
pop    - function - removes the last value in the list and returns it
get    - function - accepts an index and returns the value at that position
delete - function - accepts an index, removes value from list, collapses, and returns removed value

I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
has two properties, value and next.

class LinkedList {
  constructor(value) {
    this.head = this.createNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  createNode(value) {
    return {
      value: value,
      next: null
    }
  }

  push(value) {
    const newNode = this.createNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  get(index) {
    if (this.length <= index || index < 0) return;
    
    let count = 0;
    let currNode = this.head;
    
    while (count < index) {
      currNode = currNode.next;
      count++;
    }

    return currNode.value;
  }

  delete(index) {
    if (index < 0 || index >= this.length) return;
    
    if (index === 0) {
      const deletedValue = this.head.value;
      this.head = null;
      this.tail = this.head;
      this.length = 0;
      return deletedValue;
    }
    
    let count = 0;
    let currNode = this.head;

    while (count < index - 1) {
      currNode = currNode.next;
      count++;
    }
    
    const deletedValue = currNode.next.value;
    currNode.next = currNode.next.next;
    if (index === this.length - 1) this.tail = currNode;
    this.length--;
    
    return deletedValue;
  }
}
```

Refactored

```
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(index, value) {
    if (index < 0 || index > this.length) return;
    
    const newNode = new LinkedListNode(value);
    
    if (this.head === null || index === 0) {
      const copy = this.head;
      this.head = newNode;
      this.head.next = copy;
      this.tail = this.tail || newNode;
      return ++this.length;
    }

    const currNode = this._getNode(index);
    const prevNode = this._getNode(index - 1);

    prevNode.next = newNode;
    newNode.next = currNode;

    if (index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return ++this.length;
  }

  delete(index) {
    const currNode = this._getNode(index);
    
    if (index === 0) {
      this.head = currNode.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else { 
      const prevNode = this._getNode(index - 1);
      const nextNode = this._getNode(index + 1);
      if (index === this.length - 1) {
        this.tail = prevNode;
      }
      prevNode.next = nextNode;
    }
    this.length--;
    return currNode.value;
  }

  push(value) {
    return this.add(this.length, value);
  }

  pop() {
    return this.delete(this.length - 1);
  }

  _getNode(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0 ) return this.head;
    
    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    
    return node;
  }
}

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```
