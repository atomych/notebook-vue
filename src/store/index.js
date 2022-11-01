import { createStore } from "vuex";
import errors from "./modules/errors";
import spinner from "./modules/spinner";
import user from "./modules/user";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { errors, spinner, user },
});
