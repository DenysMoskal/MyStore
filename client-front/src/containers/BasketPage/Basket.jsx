import React from 'react';
import styles from './Basket.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { setGoodClear } from '@store/favorite/favoriteSlice';
import CartEmpty from '@components/CartEmpty';
import List from '@components/BasketList';

const Basket = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.favorite);
  const price = useSelector((state) => state.favorite.fullPrice);

  return price > 0 ? (
    <ul className={styles.container}>
      <li className={styles.item}>
        <span className={styles.item__name}>Назва</span>
        <span className={styles.item__price}>Ціна </span>
        <span className={styles.price}>Зображення</span>
        <span className={styles.item__count}>К-сть</span>
      </li>

      {favorite.map(({ name, image, _id, price }) => (
        <List name={name} image={image} _id={_id} price={price} key={_id} />
      ))}
      <li className={styles.item}>
        <button
          onClick={() => dispatch(setGoodClear())}
          className={cn(styles.item__button_сlear, styles.item__button)}
        >
          Очистити
        </button>
        <span className={styles.item__count}>Ціна : {price} UAH</span>
      </li>
    </ul>
  ) : (
    <CartEmpty />
  );
};

export default Basket;
