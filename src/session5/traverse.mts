import { Node } from "./linked.mjs";

export function traverse(head: Node | null) {
  let current = head;

  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

// traverse(sampleHead);
