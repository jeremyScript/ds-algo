# Divide and Conquer

Recursive calls to a subset of the problem.

1. Recognize base case.
2. Divide: break problem down during each call.
3. Conquer: do work on each subset.
4. Combine solutions.


## The Master Theorem

Divide the problem into a number of subproblems and apply a procedure to the subproblems recursively.

This can be visualized as building a call tree with each node of the tree as an instance of one recursive call and its child nodes being instances of subsequent calls. The total amount of work done by the entire tree is the sum of the work performed by all the nodes in the tree.

```
procedure p( input x of size n ):
 if n < some constant k:
   Solve x directly without recursion
 else:
   Create a subproblems of x, each having size n/b
   Call procedure p recursively on each subproblem
   Combine the results from the subproblems
```
