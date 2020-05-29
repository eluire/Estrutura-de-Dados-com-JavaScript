import Queue from "./Queue";

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue("John");
queue.enqueue("Jack");

queue.show();

console.log(queue.size());

queue.enqueue("Camila");
let aux = queue.dequeue();

console.log(aux);
// console.log(queue.lowestCount);

queue.show();
