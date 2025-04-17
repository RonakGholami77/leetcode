import { Node } from "./linked.mjs";

const sampleHead = new Node(0);
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);

sampleHead.next = one;
one.next = two;
two.next = three;
three.next = four;

export { sampleHead };
