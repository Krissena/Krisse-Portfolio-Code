import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createProvider } from './vue-apollo'

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  apolloProvider: createProvider(),

  //el: '#app',
  // store,
  render: h => h(App)
})
.$mount('#app');
//dfhgjhfghfgjfgj
