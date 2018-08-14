<template>
  <div>
    <ul class="ul">
      <li class="li shadow" v-for="(todoItem, index) in this.$store.state.todoItems" :key="index">
        {{ todoItem }}
        <span class="removeBtn" v-on:click="removeTodo({ todoItem,index })">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script scoped>
import { mapMutations } from 'vuex'

export default {
  // props: ['propsdata'],
  methods: {
    // mapMutations([
    //   메서드 이름 = 뮤테이션 이름
    //   removeTodo: 'removeTodo'
    //   'removeTodo'
    // ]),
    // mapMutations([
    //   해당 컴포넌트에서 트리거되는 메서드 이름 = 스토어의 뮤테이션 이름
    //   removeTodo: 'removeTodoItems'
    // ])

    // payload가 자동으로 전달됨
    ...mapMutations(['reomveTodo'])

    // removeTodo(payload) {
    //   // const payload = {
    //   //   todoItem: todoItem,
    //   //   index: index
    //   // }
    //   this.$store.commit('removeTodoItem', payload);
    // }
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}


.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-move {
  transition: transform 1s;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
