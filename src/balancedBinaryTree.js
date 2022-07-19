import { getRandInt } from "./util";

/*
Write a function to see if a binary tree is "superbalanced".

A tree is "superbalanced" if the difference between the depths of any two leaf
nodes is no greater than one.
*/

// Solution

export const isBinaryTreeBalanced = (treeRoot) => {
  if (!treeRoot) return true;

  // for depth first traversal
  const nodes = [];
  nodes.push([treeRoot, 0]);

  // for storing unique depth levels of leaves
  const depths = new Set();

  let minDepth;
  let maxDepth;

  while (nodes.length) {
    let [currNode, currDepth] = nodes.pop();

    if (!currNode.left && !currNode.right) {
      minDepth =
        minDepth === undefined ? currDepth : Math.min(minDepth, currDepth);
      maxDepth =
        maxDepth === undefined ? currDepth : Math.max(maxDepth, currDepth);

      // If the difference is more than 1, tree is not 'superbalanced'.
      if (maxDepth - minDepth > 1) {
        return false;
      }

      depths.add(currDepth);

      // If there are more than 2 unique values, tree is not 'superbalanced'.
      if (depths.length > 2) {
        return false;
      }
    } else {
      currDepth++;
      if (currNode.right) {
        nodes.push([currNode.right, currDepth]);
      }
      if (currNode.left) {
        nodes.push([currNode.left, currDepth]);
      }
    }
  }

  return true;
};

export class BinaryTreeNode {
  constructor(value = getRandInt(10)) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  insertLeft(value = getRandInt(10)) {
    this.left = new BinaryTreeNode(value);
    this.left.parent = this;
    return this.left;
  }

  insertRight(value = getRandInt(10)) {
    this.right = new BinaryTreeNode(value);
    this.right.parent = this;
    return this.right;
  }

  getParent() {
    return this.parent;
  }
}
