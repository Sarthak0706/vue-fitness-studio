import { createStore } from "vuex";

export default createStore({
  state: {
    exercises: {},
  },
  mutations: {
    ADD_EXERCISE(state, { workout, exercise, sets, time }) {
        if (!state.exercises[workout]) {
            state.exercises[workout]=[];
        }
      state.exercises[workout].push({ exercise, sets, time });
    },
  },
  actions: {
    addexercise({ commit }, payload) {
      commit("ADD_EXERCISE", payload);
    },
  },
  getters: {
    showexercise(state) {
      return state.exercises;
    },
  },
});
