import './firebase'
import firebase from 'firebase'
// import firebaseui from 'firebaseui';
import Vue from 'vue'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import App from './App.vue'
import { auth } from './firebase'
import _ from 'lodash'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './theme/overrides.scss'
import 'font-awesome/scss/font-awesome.scss'
// import 'firebaseui/dist/firebaseui.css'

Vue.use(BootstrapVue);

let app = new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
});

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
