import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from '@components/Cart';

import { useSortGoods } from '@hooks/HookSort';
import { getGoods } from '@store/goods/goodsSlice';
import ShopToolBar from '@components/ShopToolBar';
import CartSkeleton from '@components/CartSkeleton';
import NotFound from '@components/NotFound';

import { GoodsContext } from '@hooks/GoodsCotext';

const Shop = () => {
  const { items, isError, isLoading } = useSelector(
    (state) => state.goods.goods,
  );
  const dispatch = useDispatch();

  const [text, setText] = React.useState('');
  const { sortedGoods, setIsDescSort } = useSortGoods(items || []);

  React.useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  return (
    <GoodsContext.Provider
      value={{
        setIsDescSort,
        text,
        setText,
      }}
    >
      <ShopToolBar items={items} setIsDescSort={setIsDescSort} />
      {isError ? (
        <NotFound />
      ) : (
        <div>
          {isLoading ? (
            [...new Array(4)].map((_, index) => <CartSkeleton key={index} />)
          ) : (
            <Cart
              items={items}
              isError={isError}
              isLoading={isLoading}
              sortedGoods={sortedGoods}
            />
          )}
        </div>
      )}
    </GoodsContext.Provider>
  );
};

export default Shop;
