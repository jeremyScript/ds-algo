import { TwoStackQueue } from "../src/twoStackQueue";

describe("TwoStackQueue", function () {
  let queue;

  beforeEach(() => {
    queue = new TwoStackQueue();
  });

  test("constructor", () => {
    expect(queue).toEqual(expect.any(TwoStackQueue));
  });

  test("enqueue", () => {
    expect(queue.length).toEqual(0);
    expect(queue.enqueue(5)).toEqual(1);
    expect(queue.length).toEqual(1);
    expect(queue.enqueue(7)).toEqual(2);
    expect(queue.length).toEqual(2);
  });

  test("dequeue", () => {
    expect(queue.dequeue()).toEqual(null);
    queue.enqueue(7);
    expect(queue.dequeue()).toEqual(7);
    expect(queue.length).toEqual(0);
    queue.enqueue(11);
    queue.enqueue(9);
    expect(queue.dequeue()).toEqual(11);
    queue.enqueue(13);
    queue.enqueue(8);
    expect(queue.dequeue()).toEqual(9);
    expect(queue.length).toEqual(2);
    expect(queue.dequeue()).toEqual(13);
    expect(queue.length).toEqual(1);
  });

  test("peek", () => {
    expect(queue.peek()).toEqual(null);
    queue.enqueue(21);
    expect(queue.peek()).toEqual(21);
    queue.enqueue(11);
    expect(queue.peek()).toEqual(21);
    queue.enqueue(31);
    queue.dequeue();
    expect(queue.peek()).toEqual(11);
  });
});
