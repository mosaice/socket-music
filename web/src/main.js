import Vue from 'vue';
import VueResource from 'vue-resource';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'assets/stylesheets/style.scss';

import store from 'store';
import router from './router';
import App from './App';

Vue.use(VueResource);
Vue.use(Element);


new Vue({
  router,
  store,
  render: h => h(App),
  http: {
    root: 'http://localhost:3000/api',
  },
}).$mount('#app');
