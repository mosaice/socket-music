import Vue from 'vue';
import VueResource from 'vue-resource';
import router from './router';
import App from './App';
import store from './store';

Vue.use(VueResource);


new Vue({
  router,
  store,
  render: h => h(App),
  http: {
    root: 'http://localhost:3000/api',
  },
}).$mount('#app');
