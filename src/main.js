import './styles/fonts.scss';
import Vue from 'vue'
import App from './App.vue'
import store from './core/store'
require('./assets/js/DrawSVGPlugin');


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
