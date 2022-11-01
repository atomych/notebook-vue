import { codes } from "../../firebase/codes";

export default {
  state: {
    errors: [],
    id: 0,
  },
  actions: {
    async regNewError({ state, commit }, value) {
      if (codes[value]) {
        commit("addErr", codes[value]);
      } else {
        commit("addErr", value);
      }

      const delId = state.id - 1;

      setTimeout(() => {
        commit("removeErr", delId);
      }, 3000);
    },
  },
  mutations: {
    addErr(state, value) {
      state.errors.push({ text: value, id: state.id++ });
    },
    removeErr(state, ref) {
      state.errors = state.errors.filter((el) => el.id != ref);
    },
  },
  getters: {
    getErrors(state) {
      return state.errors;
    },
  },
};
