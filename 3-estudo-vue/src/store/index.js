import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoArray: [
      { id: "1", message: "Study Vue.js" },
      { id: "2", message: "Study Vuetify" },
      { id: "3", message: "Study Vuex" },
      { id: "4", message: "Study automated testing" },
      { id: "5", message: "Post in LinkedIn" },
    ],
    completedArray: [],
    destroyedArray: [],
  },
  mutations,
  actions,
  getters: {
    getTodoArray: (state) => state.todoArray,
    getCompletedArray: (state) => state.completedArray,
    getDestroyedArray: (state) => state.destroyedArray,
  },
});

export default store;
