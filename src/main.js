import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css';
import ScrollAnimation from './directives/scrollanimation'
import VueScrollMagic from 'vue-scrollmagic'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.directive('scrollanimation',ScrollAnimation)
Vue.use(VueScrollMagic)

new Vue({
  render: h => h(App),
}).$mount('#app')
