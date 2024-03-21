// store.js

import { createStore } from 'vuex';
interface User {
  data: string
}
const store = createStore({
  state: {
    // 定义你的应用程序状态
    users: [] , // 初始状态为空数组

  },
  mutations: {
    // 定义用于修改状态的方法
    updateMessage(state, newMessage) {
      state.message = newMessage;
    },
  },
  actions: {
    // 定义异步操作，可调用mutations中的方法
    changeMessage({ commit }, newMessage) {
      commit('updateMessage', newMessage);
    },
  },
});

export default store;
