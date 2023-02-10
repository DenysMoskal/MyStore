import HomePage from '@containers/HomePage';
import ShopPage from '@containers/ShopPage';
import GoodPage from '@containers/GoodPage';
import CreateGood from '@containers/CreateGoodPage';
import BasketPage from '@containers/BasketPage';

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
  {
    path: '/basket',
    element: <BasketPage />,
  },
];

export default routesConfig;
