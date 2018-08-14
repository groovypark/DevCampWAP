export const mutations = {
  addTodoItem(state, value) {
    state.todoItems.push(value);
    localStorage.setItem(value, value)
    this.inputText = ''
  },
  reomveTodo(state, {todoItem,index}) {
    // es6 문법
    // removeTodoItem(state, payload) {
    // state.todoItems.splice(payload.index, 1);
    // localStorage.removeItem(payload.todoItem);
    state.todoItems.splice(index, 1);
    localStorage.removeItem(todoItem);
  },
  clearAllItems(state) {
    state.todoItems = [];
    localStorage.clear;
  }
}