export default class Deque {
  constructor() {
    (this.count = 0), (this.lowestCount = 0);
    this.items = {};
  }

  addFront(element) {
    this.items[this.count] = element;
    this.count++;
  }
}
