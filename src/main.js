import Vue from 'vue'
import App from './App.vue'
import {Button,Container,Header,Main,Aside,Menu,Submenu,MenuItem,MenuItemGroup,Row,Col,Card} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from '../router';
import http from 'axios'

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);

Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')