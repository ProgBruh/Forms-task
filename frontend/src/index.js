import Vue from 'vue';
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faTimes,
  faPlusSquare,
  faEye,
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import store from './store';
import './styles/index.scss';
import App from './App.vue';

Vue.use(VeeValidate);

library.add(
  faCheck,
  faTimes,
  faPlusSquare,
  faEye,
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

const vm = new Vue({
  render: (h) => h(App),
  router,
  store,
});
vm.$mount('#app');
