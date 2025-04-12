export class GenericStack<T> {
  private readonly items: T[];

  public constructor(items: T[] = []) {
    this.items = [...items];
  }

  public push(item: T) {
    this.items.push(item);
  }

  public pop() {
    if (this.items.length === 0) return null;
    const [item] = this.items.splice(this.items.length - 1, 1);
    return item;
  }

  public top(): T | null {
    if (this.items.length === 0) {
      return null;
    }

    return this.items[this.items.length - 1];
  }

  public bottom(): T | null {
    if (this.items.length === 0) {
      return null;
    }

    return this.items[0];
  }

  public size(): number {
    return this.items.length;
  }
}
