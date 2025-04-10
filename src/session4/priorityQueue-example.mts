import { priorityQueue } from "./priorityQueue.mjs";

const queue = new priorityQueue<number>((a, b) => a - b);

queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(12);
queue.enqueue(1);
queue.enqueue(0);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
