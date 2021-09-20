/*
Implement a queue. Your queue should have enqueue and dequeue methods and
should be FIFO. Your queue implementation should also have time and space 
complexities that are characteristic of a queue.
*/

// Solution

class Queue {
  constructor() {
    this.head = this.createNodeFromValue(null);
    this.tail = this.head.next;
  }

  createNodeFromValue(value) {
    return {
      value,
      next: null,
    };
  }

  enqueue(value) {
    const newNode = this.createNodeFromValue(value);
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
  }

  dequeue() {
    if (this.head === null) return null;
    const dequeuedValue = this.head.value;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;

    return dequeuedValue;
  }

  peek() {
    return this.tail.value;
  }
}
