import { GenericQueue } from "./queue.mjs";
import { GenericStack } from "./stack.mjs";

function countStudents(students: number[], sandwiches: number[]): number {
  const allStudents = new GenericQueue(students);
  const allSandwiches = new GenericStack();
  for (let i = sandwiches.length - 1; i >= 0; i--) {
    allSandwiches.push(sandwiches[i]);
  }

  console.log(allStudents);
  console.log(allSandwiches);

  let skippedCount = 0;

  while (skippedCount < allStudents.size()) {
    let student = allStudents.dequeue()!;
    let sandwich = allSandwiches.pop()!;

    if (student === sandwich) {
      skippedCount = 0;
    } else {
      allStudents.enqueue(student);
      allSandwiches.push(sandwich);

      skippedCount++;
    }
  }

  return allStudents.size();
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));

// (i = 0 is the top of the stack) and (i = 0 is the front of the queue).
