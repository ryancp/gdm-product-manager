import categoryModel from '../models/category';

const getDefaultState = () => ({
  list: {
    items: [],
  },
});

export default {
  namespaced: true,
  state: getDefaultState(),
  actions: {
    getList({ commit }) {
      commit('getListRequest');

      categoryModel.getList()
        .then(
          list => commit('getListSuccess', list),
          error => commit('getListFailure', error),
        );
    },
  },
  mutations: {
    getListRequest(state) {
      const stateParam = state;
      stateParam.list = { loading: true };
    },
    getListSuccess(state, list) {
      const stateParam = state;
      stateParam.list = { items: list };
    },
    getListFailure(state, error) {
      const stateParam = state;
      stateParam.list = { error };
    },
  },
};
