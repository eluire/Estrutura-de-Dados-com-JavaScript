export default class StackObj {
  constructor() {
    this._count = 0;
    this._items = {};
  }
  // adiciona ultimo elemento a pilha
  push(element) {
    this._items[this._count] = element;
    this._count++;
  }
  // retorna tamanho da pilha
  size() {
    return this._count;
  }
  // verifica se a pilha está vazia
  isEmpty() {
    return this._count === 0;
  }
  // retira ultimo elemento da pilha
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this._count--;
    const result = this._items[this._count];
    delete this._items[this._count];
    return result;
  }
  // espiar elemento no top da pilha
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._items[this._count - 1];
  }
  // limpa a pilha
  clear() {
    this._items = {};
    this._count = 0;
  }
  // mostra a pilha toda
  show() {
    console.log(this._items);
  }
}
