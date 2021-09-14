class Stack {
  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

/*
Given this Stack class above, use it to implement a new class MaxStack with a
method getMax() that returns the largest element in the stack. getMax() should
not remove the item.

Your stacks will contain only integers.
*/

// Solution
// O(1) time for push, pop, and getMax.
// O(n) space

export class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.highestNumsStack = new Stack();
  }

  // Check to see if num is greater than or equal to highestNum,
  // If it is, push it onto highestNumsStack.
  push(num) {
    const lastIndex = this.highestNumsStack.items.length - 1;
    const highestNum = this.highestNumsStack.items[lastIndex] || num;
    if (num >= highestNum) this.highestNumsStack.push(num);
    this.stack.push(num);
  }

  // If the popped number is equal to highestNum,
  // also pop from highestNumsStack.
  pop() {
    const lastIndex = this.highestNumsStack.items.length - 1;
    const highestNum = this.highestNumsStack.items[lastIndex];
    const poppedNum = this.stack.pop();
    if (poppedNum === highestNum) this.highestNumsStack.pop();
    return poppedNum === undefined ? null : poppedNum;
  }

  // The last number is the highest number in the stack.
  getMax() {
    return this.highestNumsStack.peek();
  }
}
