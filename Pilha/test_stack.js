import StackArr from "./stack_arr";
import StackObj from "./stack_obj";

const stack = new StackObj();

console.log(stack.isEmpty());

stack.push(5);

stack.push(8);

console.log(stack.peek());

stack.push(11);

console.log(stack.size());

console.log(stack.isEmpty());

stack.push(15);

console.log(stack.show());

stack.pop();

stack.pop();

console.log(stack.show());
