# Binary Tree
(Source: interviewcake.com)

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
