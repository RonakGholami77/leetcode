// function timeRequiredToBuy(tickets: number[], k: number): number {
//   const queue = new GenericQueue<number>();
//   for (let i = 0; i < tickets.length; i++) {
//     queue.enqueue(tickets[i]);
//   }
//
//   let time = 0;
//   let index = k;
//   let removed = 0;
//
//   while (queue.size() > 1) {
//     removed = queue.dequeue()!;
//     removed--;
//     time++;
//
//     if (removed > 0) {
//       queue.enqueue(removed);
//     }
//
//     index--;
//
//     if (index === -1) {
//       if (removed === 0) {
//         return time;
//       }
//
//       index = queue.size() - 1;
//     }
//   }
//
//   removed = queue.dequeue()!;
//   return time + removed;
// }

function timeRequiredToBuy(tickets: number[], k: number): number {
  let person = tickets[k];
  let minutes = 0;
  let after = false;

  for (let i = 0; i < tickets.length; i++) {
    let value;
    if (!after) {
      value = Math.min(person, tickets[i]);
    } else {
      if (tickets[i] >= person) {
        value = person - 1;
      } else {
        value = tickets[i];
      }
    }
    minutes += value;
    if (i === k) {
      after = true;
    }
  }

  return minutes;
}

console.log(timeRequiredToBuy([2, 3, 2], 2));
console.log(timeRequiredToBuy([2, 3, 20], 2));
console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
