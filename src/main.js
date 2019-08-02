import './styles/fonts.scss';
import Vue from 'vue'
import App from './App.vue'
import store from './core/store'
import router from './core/router';
import Appearable from './components/appearable';
require('./assets/js/DrawSVGPlugin');


Vue.config.productionTip = false
Vue.component('Appearable', Appearable);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
