import { Node } from "./linked.mjs";
import { sampleHead } from "./sample-linked.mjs";
import { traverse } from "./traverse.mjs";

let head: Node | null = sampleHead;
function addAtIndex(node: Node, targetIndex: number) {
  if (targetIndex === 0) {
    node.next = head;
    head = node;
    return;
  }

  let current = head;
  let index = 0;

  while (current !== null) {
    if (index === targetIndex - 1) {
      node.next = current.next;
      current.next = node;
      break;
    }
    current = current.next;
    index++;
  }
}

addAtIndex(new Node(5), 2);
traverse(head);
