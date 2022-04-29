# Binary Search Tree

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
