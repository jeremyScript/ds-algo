class Stack {
  constructor() {
    this.items = [];
    this.top = 0;
  }

  // Push a new item onto the stack
  push(item) {
    this.items[this.top++] = item;
    return this.top;
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    if (this.top === 0) {
      return null;
    }
    this.top--;
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (this.top === 0) {
      return null;
    }

    return this.items[this.top - 1];
  }

  isEmpty() {
    return this.top === 0 ? true : false;
  }

  clear() {
    this.items = [];
    this.top = 0;
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
    this.largestNums = new Stack();
  }

  // Check to see if num is greater than the current largest number,
  // If it is, push it onto largestNums.
  push(num) {
    if (this.stack.top === 0 || num > this.largestNums.peek()) {
      this.largestNums.push(num);
    }

    return this.stack.push(num);
  }

  // If the popped number is equal to the current largest number,
  // pop from largestNums.
  pop() {
    const popped = this.stack.pop();
    if (popped === this.largestNums.peek()) {
      this.largestNums.pop();
    }
    return popped;
  }

  // The last number is the highest number in the stack.
  getMax() {
    return this.largestNums.peek();
  }
}
