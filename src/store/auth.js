import userModel from '../models/user';
import router from '../init/router';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

export default {
  namespaced: true,
  state: initialState,
  actions: {
    login({ dispatch, commit }, { username, password }) {
      commit('loginRequest', { username });

      userModel.login(username, password)
        .then(
          (item) => {
            commit('loginSuccess', item);
            router.push('/home');
          },
          (error) => {
            commit('loginFailure', error);
            dispatch('toaster/error', error, { root: true });
          },
        );
    },
    logout({ commit }) {
      userModel.logout();
      commit('logout');
    },
  },
  mutations: {
    loginRequest(state, item) {
      const stateParam = state;
      stateParam.status = { loggingIn: true };
      stateParam.user = item;
    },
    loginSuccess(state, item) {
      const stateParam = state;
      stateParam.status = { loggedIn: true };
      stateParam.user = item;
    },
    loginFailure(state) {
      const stateParam = state;
      stateParam.status = {};
      stateParam.user = null;
    },
    logout(state) {
      const stateParam = state;
      stateParam.status = {};
      stateParam.user = null;
    },
  },
};
