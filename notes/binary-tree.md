# Binary Tree
(Source: interviewcake.com, Brian Holt)

A binary tree is a "tree" data structure where every node has two or fewer children. The children are usually called *left* and *right*.

```
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }
}
```

![image](https://user-images.githubusercontent.com/87665319/159576863-54c5298d-efa9-4bd4-a7c6-8dec2d91008e.png)

That particular example is special because every level of the tree is completely full. There are no "gaps." We call this kind of tree "perfect."

Binary trees have a few interesting properties when they're perfect:

Property 1: the number of total nodes on each "level" doubles as we move down the tree.

Property 2: the number of nodes on the last level is equal to the sum of the number of nodes on all other levels (plus 1). In other words, about half of our nodes are on the last level.

There are many varieties of tree data structures. We'll be looking at two of them, binary search trees and AVL trees, but there are so many more. They're used everywhere due to their fast access patterns, even across enormous data sets.

At its core, a tree is very similar to a LinkedList. You have nodes. Those nodes have values and pointers to other nodes. Unlike a LinkedList which only has one next pointer (or maybe a next and previous) trees can have many pointers. We're going to be looking at two types of trees today that have just two children nodes: binary search trees and AVL trees (which are a special type of binary search tree).

The first one we'll be looking at is a binary search tree (from here-on-out I'll abbreviate binary search trees as BSTs.) The binary part means there are at most two children nodes per node and the search part means that it's particularly well suited for "search" scenarios e.g. you need to be able to rapidly access data in it, even if it means slower inserts and deletes.

So we have one node that is the root. That node can have a left child and a right child. It can have both, one, or neither. Every node has a value. Both children are nodes just like the root: they can 0-2 children as well and will always have a value (there are no nodes without values.) Every value in a node's left tree is smaller than its value and every node in its right tree is larger than its value. Values that are equal can go either way, just be consistent. I tend to put equal values on the left.

![image](https://user-images.githubusercontent.com/87665319/159582608-eb94e684-9cf6-4a63-8427-d167737909a5.png)

If the any of the above rules are violated, then your tree isn't a binary search tree. All of them use be followed 100% of the time. Because of this you can make assumptions about it which it makes really fast to use in certain scenarios.

## Lookups

Let's talk about about how to do a look up. Say you have the above tree and you want to find 4.

````
-> .find is called with 4
-> start with root 8, 4 is smaller so go left
-> node 3, 4 is larger, go right
-> node 6, 4 is smaller, go left
-> node 4, found result
```

This is the whole algorithm for look ups. Go left or right depending if it's smaller or bigger (respectively) and then you'll find it. What's the Big O here? In this case, we're not hopefully not looking at every item in the tree, just some small sampling of them. The average case here would be O(log n). The best case is that someone asks for the root which be O(1). The worst case if that if you have a poorly made BST where every child is on the left (or right) and you have to look at every item in the array to find it. That would be O(n).

## Add

