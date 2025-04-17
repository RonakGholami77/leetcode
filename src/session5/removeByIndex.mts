import { sampleHead } from "./sample-linked.mjs";
import { traverse } from "./traverse.mjs";
import { Node } from "./linked.mjs";

let head: Node | null = sampleHead;

function removeByIndex(targetIndex: number) {
  if (targetIndex === 0) {
    head = head?.next ?? null;
  }

  let current = head;
  let index = 0;

  while (current !== null) {
    if (index === targetIndex - 1) {
      current.next = current.next?.next ?? null;
      break;
    }
    current = current.next;
    index++;
  }
}

removeByIndex(2);
traverse(head);
