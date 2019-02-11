import _ from 'lodash';
import productModel from '../models/product';

const getDefaultState = () => ({
  list: {
    items: [],
  },
  item: {},
});

export default {
  namespaced: true,
  state: getDefaultState(),
  actions: {
    getList({ commit }) {
      commit('getListRequest');

      productModel.getList()
        .then(
          list => commit('getListSuccess', list),
          error => commit('getListFailure', error),
        );
    },
    getItem({ commit }, id) {
      commit('itemRequest');

      productModel.getItem(id)
        .then(
          item => commit('itemSuccess', item),
          error => commit('itemFailure', error),
        );
    },
    createItem({ dispatch, commit }, productItem) {
      commit('itemRequest');

      productModel.createItem(productItem)
        .then(
          (item) => {
            commit('itemSuccess', item);
            dispatch('toaster/success', `Product created successfully: ${item.Name}`, { root: true });
          },
          error => commit('itemFailure', error),
        );
    },
    updateItem({ dispatch, commit }, productItem) {
      commit('itemRequest');

      productModel.updateItem(productItem)
        .then(
          () => {
            commit('itemSuccess', productItem);
            dispatch('toaster/success', `Product updated successfully: ${productItem.Name}`, { root: true });
          },
          error => commit('itemFailure', error),
        );
    },
  },
  mutations: {
    resetItem(state) {
      const stateParam = state;
      Object.keys(state.item).forEach((key) => {
        delete stateParam.item[key];
      });
    },
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
    itemRequest(state) {
      const stateParam = state;
      stateParam.item = { loading: true };
    },
    itemSuccess(state, item) {
      const stateParam = state;
      stateParam.item = item;
    },
    itemFailure(state, error) {
      const stateParam = state;
      stateParam.item = { error };
    },
    setItem(state, item) {
      const stateParam = state;
      // merge data with previous state
      stateParam.item = Object.assign({}, stateParam.item, item);
    },
  },
  getters: {
    getCategoryIds(state) {
      if (_.isArray(state.item.Categories) && state.item.Categories.length > 0) {
        return state.item.Categories.map(category => category.CategoryId);
      }

      return [];
    },
    getProductForCreateUpdate(state) {
      const product = {
        Name: state.item.Name,
        Description: state.item.Description,
        Url: state.item.Url,
        CategoryIds: state.item.CategoryIds,
      };

      if (state.item.ProductId) {
        product.ProductId = state.item.ProductId;
      }

      return product;
    },
  },
};
