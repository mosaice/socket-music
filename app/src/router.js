import Search from 'pages/Search';
import Home from 'pages/Home';

export default function (router) {
  router.map({
    '/search': {
      component: Search,
    },
    '/': {
      component: Home,
    },
  });
}
