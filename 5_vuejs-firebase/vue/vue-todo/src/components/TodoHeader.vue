<template>
  <div>
    <header>
      <h1>{{ this.$store.getters.reverseMessage }}</h1>
      <!-- <h1>{{ this.reverseMessage }}</h1> -->
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  // data() {
  //   return {
  //     headerMessage: 'Todo App'
  //   }
  // },
  computed: {
    // reverseHeader() {
    //   return this.headerMessage+ '!!'
    // },
    reverseMessage() {
      return this.$store.getters.reverseMessage
    },
    // ...mapGetters(['reverseMessage'])
  },
  // created() {
  //   console.log(this);
  // },
}
</script>

<style scoped>
h1 {
  color: #2F3B52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
