import Vue from 'vue';
import App from './App';
import Ant from 'vue-ant-ui';
import 'vue-ant-ui/lib/style.css';
import VueRouter from 'vue-router';
import configRouter from './router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(Ant);
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000/api';

const router = new VueRouter({
  history: true,
});

configRouter(router);

router.start(App, '#app');
