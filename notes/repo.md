```
// LinkedList

class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value: any, index: number) {
    if (index < 0 || index > this.length) throw new Error('Invalid input');

    const newNode = new ListNode(value);
    // case 1
    // index === 0 && (this.length === 0 || this.length > 0)
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      
      if (this.length === 0) {
        this.tail = newNode;
      }
    }
    // case 2
    // index === this.length || index !== this.length
    
    else {
      const prevNode = this.#findNode(index - 1)!;
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      
      if (index === this.length) {
        this.tail = newNode;
      }
    }
    this.length++;
    return this.length;
  }

  push(value: any) {
    return this.insert(value, this.length);
  }

  delete(index: number) {
    if (index < 0 || index >= this.length) throw new Error('Invalid input');
    if (this.head === null) throw new Error('The list is empty');

    let deletedNode;

    // case 1
    // index === 0 && (this.length === 1 || this.length > 1)
    if (index === 0) {
      deletedNode = this.head;
      if (!this.head.next) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
    } else {
      deletedNode = this.#findNode(index)!;
      const prevNode = this.#findNode(index - 1)!;
      if (index === this.length - 1) {
        prevNode.next = null;
        this.tail = prevNode;
      } else {
        prevNode.next = deletedNode.next;
      }
    }

    this.length--;
    return deletedNode.value;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  #findNode(index: number) {
    if (index < 0 || index >= this.length) {
      throw new Error('Invalid input');
    }

    let node = this.head;

    for (let i = 0; i < index && node; i++) {
      node = node.next;
    }

    return node;
  }
}

// Queue with LinkedList

class Queue {
  data: LinkedList;
  length: number;

  constructor() {
    this.data = new LinkedList();
    this.length = 0;
  }

  enqueue(value: any) {
    this.length++;
    return this.data.push(value);
  }

  dequeue() {
    this.length--;
    return this.data.delete(0);
  }

  peek() {
    return this.data.head;
  }
}

// Stack with LinkedList

class Stack {
  data: LinkedList;
  top: number;

  constructor() {
    this.data = new LinkedList();
    this.top = 0;
  }

  push(value: any) {
    this.top++;
    return this.data.push(value);
  }

  pop() {
    this.top--;
    return this.data.pop();
  }

  peek() {
    return this.data.tail;
  }
}

// Radix Sort

const arr = [12, 84, 999, 2, 5573, 829, 6, 121, 632, 409, 1023, 1, 21, 0, 482, 557, 448, 223, 5591, 405, 9830, 123, 7777, 10948, 3422];

function radixSort(arr: number[]) {
  const buckets: any[] = Array(10).fill(null).map(() => []);
  const longestLen = arr.reduce((acc, curr) => Math.max(acc, curr.toString().length));

  for (let digitIndex = longestLen - 1; digitIndex >= 0; digitIndex--) {
    while (arr.length > 0) {
      const popped = arr.pop()!;
      const index = getDigit(popped, digitIndex);
      buckets[index].push(popped);
    }

    for (let i = 0; i < buckets.length; i++) {
      while (buckets[i].length > 0) {
        arr.push(buckets[i].pop());
      }
    }
  }

  return arr;

  function getDigit(num: number, place: number) {
    const stringNum = num.toString();
    const currLen = stringNum.length;
    const diff = longestLen - currLen;

    return diff > place ? 0 : Number(stringNum[place - diff]);
  }
}

// Quick Sort

function quickSort(arr: number[]): number[] {
  const len = arr.length;
  if (len < 2) return arr;

  const pivot = arr[len - 1];

  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < len - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Merge Sort

function mergeSort(arr: number[]): number[] {
  const len = arr.length;
  if (len < 2) return arr;

  const halfLen = Math.floor(len / 2);
  const arrA = arr.slice(0, halfLen);
  const arrB = arr.slice(halfLen);

  return merge(mergeSort(arrA), mergeSort(arrB));

  function merge(left: number[], right: number[]) {
    const merged = [];

    let i = 0;
    let j = 0;

    while (i < left.length || j < right.length) {
      if (left[i] < right[j] || right[j] === undefined) {
        merged.push(left[i++]);
      } else {
        merged.push(right[j++]);
      }
    }

    return merged;
  }
}

// Insertion Sort

function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }

  return arr;
}

// Bubble Sort

function bubbleSort(arr: number[]) {
  let hasSwapped;

  do {
    hasSwapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        hasSwapped = true;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  } while (hasSwapped);

  return arr;
}

// Binary search

function binarySearch(arr: number[], target: number): number {
  
  let l = 0;
  let r = arr.length;

  while (l < r) {
    let m = Math.floor((l + r) / 2);

    if (target === arr[m]) return m;
    if (target > arr[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return -1;
}


```
