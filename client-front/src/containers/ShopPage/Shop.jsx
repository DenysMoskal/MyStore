import React from 'react';
import styles from './Shop.module.scss';
import { useSelector, useDispatch } from 'react-redux';

import Cart from '@components/Cart';

import { useSortGoods } from '@hooks/HookSort';
import { getGoods } from '@store/goods/goodsSlice';
import ShopToolBar from '@components/ShopToolBar';

import { GoodsContext } from '@hooks/GoodsCotext';

const Shop = () => {
  const { items, isError, isLoading } = useSelector(
    (state) => state.goods.goods,
  );
  const dispatch = useDispatch();

  const { sortedGoods, setIsDescSort } = useSortGoods(items || []);

  React.useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  return (
    <GoodsContext.Provider
      value={{
        setIsDescSort,
      }}
    >
      <ShopToolBar items={items} setIsDescSort={setIsDescSort} />
      <div>
        <Cart
          items={items}
          isError={isError}
          isLoading={isLoading}
          sortedGoods={sortedGoods}
        />
      </div>
    </GoodsContext.Provider>
  );
};

export default Shop;
