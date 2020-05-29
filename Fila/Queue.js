export default class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // Inserir elementos na fila

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  dequeue() {
    if (this.isEmpty) {
      return undefined;
    }

    console.log("heyyy");
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.count, (this.lowestCount = 0);
    this.items = {};
  }
  show() {
    if (this.isEmpty()) {
      return "";
    }
    let arr = [];

    for (let i = this.lowestCount; i < this.count; i++) {
      arr.push(this.items[i]);
    }

    console.log(arr);
  }
}
