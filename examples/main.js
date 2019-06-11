import Vue from 'vue'
import App from './App.vue'
import TestUiBtn from '../packages/index.js'
Vue.use(TestUiBtn)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
