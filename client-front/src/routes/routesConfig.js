import HomePage from '@containers/HomePage';
import ShopPage from '@containers/ShopPage';

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/shop',
    element: <ShopPage />,
  },
];

export default routesConfig;
