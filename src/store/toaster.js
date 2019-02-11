import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    type: null,
    message: null,
  },
  actions: {
    success({ commit }, message) {
      commit('success', message);
      Vue.toasted.show(message, { type: 'success' });
    },
    error({ commit }, message) {
      commit('error', message);
      Vue.toasted.show(message, { type: 'error' });
    },
    clear({ commit }, message) {
      commit('success', message);
    },
  },
  mutations: {
    success(state, message) {
      const stateParam = state;
      stateParam.type = 'toaster-success';
      stateParam.message = message;
    },
    error(state, message) {
      const stateParam = state;
      stateParam.type = 'toaster-danger';
      stateParam.message = message;
    },
    clear(state) {
      const stateParam = state;
      stateParam.type = null;
      stateParam.message = null;
    },
  },
};
