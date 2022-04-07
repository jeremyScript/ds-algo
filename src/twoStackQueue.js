/*
Implement a queue with 2 stacks.
Your queue should have an enqueue and a dequeue method.

Optimize for the time cost of m calls on your queue.
These can be any mix of enqueue and dequeue calls.

Assume you already have a stack implementation.
*/

// Solution
// O(m) runtime per m calls

export class TwoStackQueue {
  constructor() {
    this._inStack = new Stack();
    this._outStack = new Stack();
    this.length = 0;
  }

  enqueue(item) {
    this._inStack.push(item);
    return ++this.length;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    this.length--;

    return this._prepOutStack().pop();
  }

  peek() {
    return this.length === 0 ? null : this._prepOutStack().peek();
  }

  // Move items from inStack to outStack, reversing order
  _prepOutStack() {
    if (this._outStack.top === 0) {
      while (this._inStack.top > 0) {
        this._outStack.push(this._inStack.pop());
      }
    }
    return this._outStack;
  }
}

class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(element) {
    this.data[this.top++] = element;
    return this.top;
  }

  pop() {
    if (this.top === 0) return null;

    this.top--;
    return this.data.pop();
  }

  peek() {
    return this.top === 0 ? null : this.data[this.top - 1];
  }

  isEmpty() {
    return this.top === 0 ? true : false;
  }

  clear() {
    this.data = [];
    this.top = 0;
  }
}
