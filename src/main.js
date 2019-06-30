import Vue from 'vue'
import App from './App.vue'

import api from './plugins/axios'

Vue.use(api)

new Vue({
  el: '#app',
  render: h => h(App)
})
