# Binary Search Tree

## Traversals

### Depth-First Traversal

There are three variations:
- preorder
- inorder
- postorder

![image](https://user-images.githubusercontent.com/87665319/166058707-868b4760-6187-4955-b574-79855ccff4ff.png)

In preorder traversal, you process the node, then recursively call the method on the left subtree and then the right subtree.

In inorder traversal, you first recursively call the method on the left tree, then process the node, and then call the method on the right tree.

Postorder traversal, as you have guessed, you recursively call the method on the left subtree, then the left subtree, then you process the node.

The results of these are as follows:

```
// preorder
[8, 3, 1, 6, 4, 7, 10, 14, 13]

// inorder
[1, 3, 4, 6, 7, 8, 10, 13, 14]

// postorder
[1, 4, 7, 6, 3, 13, 14, 10, 8]
```

As you can see, it depends on what you're doing on which of these you use. For a sorted list out of a BST, you'd want to use inorder. If you're making a deep copy of a tree, preorder traversal is super useful since you'd copy a node, and then add its left child and then its right tree. Postorder would be useful if you're deleting a tree since you'd process the left tree, then the right, and only after the children had been deleted would you delete the node you're working on.

## Implementation

```
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.value;
  }
}

class BST {
  root: TreeNode | null;
  length: number;

  constructor() {
    this.root = null;
    this.length = 0;
  }

  insert(value: number) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currNode = this.root;

      while (true) {
        if (value < currNode.value) {
          if (!currNode.left) {
            currNode.left = newNode;
            break;
          } else {
            currNode = currNode.left;
          }
        } else {
          if (!currNode.right) {
            currNode.right = newNode;
            break;
          } else {
            currNode = currNode.right;
          }
        }
      }
    }
    return ++this.length;
  }

  traversePreorder() {
    const values: number[] = [];
    if (!this.root) return values;
    innerFunc(this.root);
    return values;

    function innerFunc(node: TreeNode | null): any {
      if (!node) return;
      values.push(node.value);
      return innerFunc(node.left) || innerFunc(node.right);
    }
  }

  traverseInorder() {
    const values: number[] = [];
    if (!this.root) return values;
    innerFunc(this.root);
    return values;

    function innerFunc(node: TreeNode | null): any {
      if (!node) return;
      if (!node.left) {
        values.push(node.value);
        return innerFunc(node.right);
      }
      innerFunc(node.left);
      values.push(node.value);
      innerFunc(node.right);
    }
  }

  traversePostorder() {
    const values: number[] = [];

    if (!this.root) return values;
    
    innerFunc(this.root);
    
    return values;

    function innerFunc(node: TreeNode | null): any {
      if (!node) return;

      if (!node.left) {
        if (!node.right) {
          return values.push(node.value);
        } else {
          innerFunc(node.right);
          return values.push(node.value);
        }
      }

      innerFunc(node.left);
      innerFunc(node.right);
      return values.push(node.value);
    }
  }
}
```
