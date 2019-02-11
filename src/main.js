import Vue from 'vue';
import router from './init/router';
import store from './store/index';
import App from './App.vue';

require('./init/ui');

Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
