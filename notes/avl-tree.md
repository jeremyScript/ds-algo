# AVL Tree

AVL (initials of Georgy Adelson-Vlesky and Evgenii Landis) trees are one of the asnwers to the problem of BST: that BSt can easily get out of balance.

AVLs are specialized BSTs, that is to say a subset of BST trees.

When you add a new value to a AVL tree, you do it the same way. The only difference is on the way up your recursive calls you check to see if the node is balanced after you added the new node. A tree is out of balance if its subtrees' difference of heights is greater than one.

![image](https://user-images.githubusercontent.com/87665319/160490521-6afbcf6a-ffe8-41b1-ac97-2d02d8cccb63.png)
Figure 5.1: Examples of AVL trees

So what's the benefit of all this extra effort? We can now guarantee that we won't hit those bad or worst case scenarios of having greatly out-of-balance trees and guarantee we won't hit the O(n) cases. Our worst case becomes O(log n).

```
```

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
