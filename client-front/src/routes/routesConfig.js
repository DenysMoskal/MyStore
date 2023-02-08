import HomePage from '@containers/HomePage';
import ShopPage from '@containers/ShopPage';
import GoodPage from '@containers/GoodPage';
import CreateGood from '@containers/CreateGoodPage';

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/shop',
    element: <ShopPage />,
  },
  {
    path: `/shop/:id`,
    element: <GoodPage />,
  },
  {
    path: '/create',
    element: <CreateGood />,
  },
];

export default routesConfig;
