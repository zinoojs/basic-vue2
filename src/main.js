import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header_Footer/Header'
import Footer from './components/Header_Footer/Footer'

Vue.config.productionTip = false
Vue.component('app-header', Header )
Vue.component('app-footer', Footer )

new Vue({
  render: h => h(App),
}).$mount('#app')
