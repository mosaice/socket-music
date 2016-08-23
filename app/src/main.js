import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({ history: true });

router.start(App, '#app');
