import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.prototype.axios = axios

// 按需引入部分组件
import { Button, Select, Input } from 'element-ui'
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Input.name, Input);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
