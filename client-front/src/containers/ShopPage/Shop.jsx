import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Shop.module.scss';

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
      <ShopToolBar setIsDescSort={setIsDescSort} />
      {isError ? (
        <NotFound />
      ) : (
        <div className={styles.container}>
          {isLoading
            ? [...new Array(4)].map((_, index) => <CartSkeleton key={index} />)
            : sortedGoods
                .filter(({ name }) => {
                  if (!text) {
                    return true;
                  }
                  return name
                    .toString()
                    .toLowerCase()
                    .includes(text.toLowerCase());
                })
                .map(({ _id, name, price, image, description }) => (
                  <Cart
                    key={_id}
                    isError={isError}
                    isLoading={isLoading}
                    sortedGoods={sortedGoods}
                    name={name}
                    price={price}
                    image={image}
                    description={description}
                    _id={_id}
                  />
                ))}
        </div>
      )}
    </GoodsContext.Provider>
  );
};

export default Shop;
