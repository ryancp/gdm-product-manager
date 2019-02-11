import _ from 'lodash';
import config from '../config';

let env = 'dev';
if (process.env.NODE_ENV !== 'development') {
  env = 'build';
}

export default {
  namespaced: true,
  state: {
    apiUri: _.trim(_.get(config, `${env}.env.default.API_URI`), '"'),
  },
  actions: {
    setApiUri({ commit }, uri) {
      commit('setApiUri', uri);
    },
  },
  mutations: {
    apiUri(state, uri) {
      const stateParam = state;
      stateParam.config.apiUri = uri;
    },
  },
};
