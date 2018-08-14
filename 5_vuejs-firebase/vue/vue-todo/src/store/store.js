import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './state.js'
import { getters } from './getters.js'
import { mutations } from './mutations.js'
import auth from './auth/index.js'

// import { url } from 'inspector';

Vue.use(Vuex)

// const storage = {
//   fetch() {
//     const arr = []
//     for (var i = 0; i < localStorage.length; i++) {
//       if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
//         arr.push(localStorage.key(i));
//       }
//     }
//     return arr
//   }
// }
// storage.fetch()

export const store = new Vuex.Store({
  modules: {
    // 모듈명: 모듈 내용
    auth: auth
  },
  state,
  getters,
  mutations,
  // actions: {
  //   fetchData(context) {
  //     $ajax(url, {

  //     })
  //     context.commit('clearAllItems')
  //   }
  // }
})