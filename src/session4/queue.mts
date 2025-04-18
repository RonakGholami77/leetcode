export class GenericQueue<T> {
  protected readonly items: T[];

  public constructor(items: T[] = []) {
    this.items = [...items];
  }

  public enqueue(item: T) {
    this.items.push(item);
  }

  public dequeue(): T | null {
    if (this.items.length === 0) {
      return null;
    }
    const [item] = this.items.splice(0, 1);
    return item;
  }

  public size(): number {
    return this.items.length;
  }

  public isEmpty() {
    return this.items.length === 0;
  }

  public front(): T | null {
    if (this.items.length === 0) {
      return null;
    }

    return this.items[0];
  }

  public back(): T | null {
    if (this.items.length === 0) {
      return null;
    }

    return this.items[this.items.length - 1];
  }
}
