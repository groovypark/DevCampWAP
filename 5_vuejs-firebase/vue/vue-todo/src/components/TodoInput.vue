<template>
  <div class="inputBox shadow">
    <input v-model="inputText" v-on:keyup.enter="addTodo" type="text" placeholder="Type what you have to do">
    <span class="addContainer">
      <i class="fas fa-plus addBtn" v-on:click="addTodo"></i>
    </span>
  </div>
</template>

<script>   
export default {
  data() {
    return {
      inputText: ''
    }
  },
  methods: {
    addTodo(value) {
      if(this.inputText !== '') {
        const value = this.inputText;
        // this.$emit('add', value);
        this.$store.commit('addTodoItem',value)
        this.inputText = '';
      }
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
