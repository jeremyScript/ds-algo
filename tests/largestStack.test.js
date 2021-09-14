import { exportAllDeclaration } from "@babel/types";
import { MaxStack } from "../src/largestStack";

test("a stack of integers", () => {
  const maxStack = new MaxStack();
  maxStack.push(8);
  maxStack.push(4);
  maxStack.push(8);
  maxStack.push(-8);
  maxStack.push(0);
  maxStack.push(-10);
  maxStack.push(10);
  maxStack.push(1);
  expect(maxStack.getMax()).toEqual(10);
});

test("a stack of integers in ascending order", () => {
  const maxStack = new MaxStack();
  maxStack.push(-3);
  maxStack.push(-2);
  maxStack.push(-1);
  maxStack.push(0);
  maxStack.push(1);
  maxStack.push(2);
  maxStack.push(3);
  expect(maxStack.getMax()).toEqual(3);
});

test("a stack of integers in descending order", () => {
  const maxStack = new MaxStack();
  maxStack.push(3);
  maxStack.push(2);
  maxStack.push(1);
  maxStack.push(0);
  maxStack.push(-1);
  maxStack.push(-2);
  maxStack.push(-3);
  expect(maxStack.getMax()).toEqual(3);
});
