export class ListNode {
  public val: number;
  public next: ListNode | null;

  public constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  public static of(items: number[]): ListNode | null {
    if (items.length === 0) {
      return null;
    }

    const head = new ListNode(items[0]);
    let current = head;

    for (let i = 1; i < items.length; i++) {
      current.next = new ListNode(items[i]);
      current = current.next;
    }

    return head;
  }

  public toString() {
    let result = [];
    let current: ListNode | null = this;

    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }

    return result.join(", ");
  }
}
