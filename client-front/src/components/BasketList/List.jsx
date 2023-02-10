import React from 'react';
import cn from 'classnames';

import styles from './List.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  setGoodMinus,
  setGoodToFavorite,
  setGoodRemove,
} from '@store/favorite/favoriteSlice';

const List = ({ name, price, image, _id }) => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) =>
    state.favorite.favorite.find((obj) => obj._id === _id),
  );

  const countPlus = () => {
    dispatch(setGoodToFavorite({ _id }));
  };

  const countMinus = () => {
    dispatch(setGoodMinus(_id));
  };

  const goodRemove = () => {
    dispatch(setGoodRemove(_id));
  };

  return (
    <li className={styles.item} clan key={_id}>
      <span className={styles.item__name}>{name}</span>
      <span className={styles.item__price}>{price} UAH</span>
      <img className={styles.item__image} src={image} alt="" />
      <button
        className={cn(styles.item__button, styles.item__button_plus)}
        onClick={countPlus}
      >
        +
      </button>
      <button
        className={cn(styles.item__button, styles.item__button_minus)}
        onClick={countMinus}
      >
        -
      </button>
      <span className={styles.item__count}>{count} </span>
      <button
        className={cn(styles.item__button_cros, styles.item__button)}
        onClick={goodRemove}
      >
        X
      </button>
    </li>
  );
};

export default List;
