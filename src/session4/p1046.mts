import { priorityQueue } from "./priorityQueue.mjs";

function lastStoneWeight(stones: number[]): number {
  const queue = new priorityQueue<number>((a: number, b: number) => a - b);

  for (const stone of stones) {
    queue.enqueue(stone);
  }

  while (queue.size() > 1) {
    let x = queue.dequeue()!;
    let y = queue.dequeue()!;

    if (x !== y) {
      queue.enqueue(x - y);
    }
  }

  return queue.isEmpty() ? 0 : queue.dequeue()!;
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
