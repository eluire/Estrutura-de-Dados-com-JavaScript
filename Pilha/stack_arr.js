export default class StackArr {
  constructor() {
    this.items = [];
  }
  // adiciona ultimo elemento a pilha
  push(element) {
    this.items.push(element);
  }
  // retira ultimo elemento da pilha
  pop() {
    this.items.pop();
  }
  // retorna elemento no top da pilha
  peek() {
    return this.items[this.items.length - 1];
  }
  // verifica se a pilha está vazia
  isEmpty() {
    return this.items.length === 0;
  }
  // retorna tamanho da pilha
  size() {
    return this.items.length;
  }
  // limpa a pilha
  clear() {
    this.items = [];
  }
  // mostra a pilha toda
  show() {
    console.log(this.items);
  }
}
