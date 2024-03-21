// store/index.ts
import { createStore } from 'vuex';

interface State {
  data: string; // 你要传递的数据类型
}

const store = createStore<State>({
  state: {
    data: '',
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
  },
});

export default store;
