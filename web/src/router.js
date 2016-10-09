import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'pages/Home';
import Search from 'pages/Search';


Vue.use(VueRouter);


export default new VueRouter({
  history: true,
  routes: [
    { path: '/search', component: Search },
    { path: '/', component: Home },
  ],
});
