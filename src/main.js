import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import 'babel-polyfill'

Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  vuetify,
  render: h => h(App)
});