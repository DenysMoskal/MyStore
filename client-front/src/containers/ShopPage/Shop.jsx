import React from 'react';
import styles from './Shop.module.scss';
import { useSelector, useDispatch } from 'react-redux';

import Cart from '@components/Cart';

import { getGoods } from '@store/goods/goodsSlice';

const Shop = () => {
  const { items, isError, isLoading } = useSelector(
    (state) => state.goods.goods,
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  return (
    <>
      <div>Shop</div>
      <div>
        <Cart items={items} isError={isError} isLoading={isLoading} />
      </div>
    </>
  );
};

export default Shop;
