export const getters = {
  reverseMessage(state) {
    // return state.message.split('').reverse().join('')
    return state.message + '!!'
  }
}