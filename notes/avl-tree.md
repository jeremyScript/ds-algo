# AVL Tree

AVL (initials of Georgy Adelson-Vlesky and Evgenii Landis) trees are one of the asnwers to the problem of BST: that BSt can easily get out of balance.

AVLs are specialized BSTs, that is to say a subset of BST trees.

When you add a new value to a AVL tree, you do it the same way. The only difference is on the way up your recursive calls you check to see if the node is balanced after you added the new node. A tree is out of balance if its subtrees' difference of heights is greater than one.

![image](https://user-images.githubusercontent.com/87665319/160490521-6afbcf6a-ffe8-41b1-ac97-2d02d8cccb63.png)

Figure 5.1: Examples of AVL trees

So what's the benefit of all this extra effort? We can now guarantee that we won't hit those bad or worst case scenarios of having greatly out-of-balance trees and guarantee we won't hit the O(n) cases. Our worst case becomes O(log n).

## The Logic

### Single Rotation

```
5
 \
  8

-> Currently valid AVL tree
-> .add called with 9

5 - node A
 \
  8 - node B
   \
    9 - node C

(on the way up from the recursion)
-> check balance of node C: left height is 0, right height is 0, balanced
-> check balance of node B: left height is 0, right height is 1, balanced
-> check balance of node A: left height is 0, right height is 2
unbalanced, right heavy, child is right heavy

-> perform right rotation
-> swap the values of nodes A and B
-> make node B the left child of node A
-> make node C the right child of node A
-> move node B's right child to its left child
(in this case they're both null)
-> make node A's _original_ left child
(which was null in this case) the left child of node B
-> update the heights of all the nodes involved

      8 - node A
    /   \
   5     9
node B   node C
```

### Double Rotations

https://btholt.github.io/complete-intro-to-computer-science/avl-double-480.webm



Exercise:

```
/*
  AVL Tree
  
  I would suggest making a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we 
  could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
  trees dues how the function calls must be recursive in order to get the balancing correct.
  
  Tree must have a method called `add` that takes a value and adds it to the tree and then correctly balances the
  tree. There is only one correct structure for any given order of adding numbers.
*/
```
