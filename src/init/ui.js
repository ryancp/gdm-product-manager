import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Toasted from 'vue-toasted';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faUserCircle,
  faWrench,
  faSpinner,
  faSignOutAlt,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import '../../scss/style.scss';

const options = {
  position: 'top-center',
  duration: 7000,
  theme: 'toasted-primary',
};

library.add(
  faUserCircle,
  faWrench,
  faSpinner,
  faSignOutAlt,
  faPlus,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.use(Toasted, options);
