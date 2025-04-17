import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

// import { priorityQueue } from "../session4/priorityQueue.mjs";
interface QueueElement {
  num: { item: number; freq: number };
  freq: number;
}

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const queue = new MaxPriorityQueue<QueueElement>();

  for (const [num, freq] of map.entries()) {
    // @ts-ignore
    queue.enqueue({ num, freq }, freq);
  }

  console.log(map.entries());
  console.log(map);
  console.log(queue);

  const result: number[] = [];
  for (let i = 0; i < k; i++) {
    // @ts-ignore
    result.push(queue.dequeue()!.element.num);
  }

  console.log(result);

  return result;
}

// function comparator([num, frequency]: [number, number]) {
//   return frequency;
// }

console.log(topKFrequent([1, 1, 1, 2, 2, 2, 3], 2));
