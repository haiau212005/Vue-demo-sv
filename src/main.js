import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
//import { DatePicker } from 'ant-design-vue';

//Vue.use(DatePicker);
Vue.use(Antd);
Vue.config.productionTip = false
Vue.prototype.$ = window.jQuery;

new Vue({
  render: h => h(App),
}).$mount('#app')
