export default {
  state: {
    show: false,
  },
  mutations: {
    setValue(state, value) {
      state.show = value;
    },
  },
  getters: {
    showSpinner(state) {
      return state.show;
    },
  },
};
