<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input>
    </todo-input>
    <todo-list>
    </todo-list>
    <todo-footer>
    </todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  },
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  // created() {
  //   for (var i=0; i<localStorage.length; i++) {
  //     if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
  //       this.todoItems.push(localStorage.key(i));
  //     }
  //   }
  // },
  // methods: {
  //   addTodoItem(value) {
  //     this.todoItems.push(value);
  //     localStorage.setItem(value,value)
  //     this.inputText = ''
  //   },
  //   removeTodoItem(todoItem, index) {
  //     this.todoItems.splice(index,1);
  //     localStorage.removeItem(todoItem);
  //   },
  //   clearAllItems() {
  //     this.todoItems = [];
  //     localStorage.clear;
  //   }
  // }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
