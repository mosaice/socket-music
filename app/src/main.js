import Vue from 'vue';
import App from './App';
import Ant from 'vue-ant-ui';
import 'vue-ant-ui/lib/style.css';
import VueRouter from 'vue-router';
import configRouter from './router';

Vue.use(VueRouter);
Vue.use(Ant);

const router = new VueRouter({ history: true });

configRouter(router);

router.start(App, '#app');
