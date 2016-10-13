import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'assets/stylesheets/style.scss';
import './filter';
import store from 'store';
import router from './router';
import App from './App';

Vue.use(Element);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
