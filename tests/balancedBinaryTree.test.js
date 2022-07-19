import {
  BinaryTreeNode,
  isBinaryTreeBalanced,
} from "../src/balancedBinaryTree";
import { getRandInt } from "../src/util";

describe("binary tree", () => {
  test("is balanced", () => {
    const root = new BinaryTreeNode();
    root.insertLeft().insertLeft().getParent().insertRight().insertLeft();
    root.insertRight().insertLeft().insertRight();

    expect(isBinaryTreeBalanced(root)).toEqual(true);
  });

  test("is not balanced", () => {
    const root = new BinaryTreeNode();
    root.insertLeft().insertRight().insertLeft();
    root
      .insertRight()
      .insertRight()
      .insertRight()
      .getParent()
      .insertLeft()
      .insertLeft()
      .insertRight();

    expect(isBinaryTreeBalanced(root)).toEqual(false);
  });
});
