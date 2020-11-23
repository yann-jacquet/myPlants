// Vues
import Home from './components/vues/Home';
import Search from './components/vues/Search';
import Plant from './components/vues/Plant';

const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: Search,
    path: '/search',
    exact: true,
  },
  {
    component: Plant,
    path: '/plant/:name/:id',
    exact: true,
  },
];

export default routes;
