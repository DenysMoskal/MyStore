import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setGoodToFavorite, setGoodMinus } from '@store/favorite/favoriteSlice';

import styles from './Cart.module.scss';

const Cart = ({ sortedGoods, _id, name, price, image, description }) => {
  const dispatch = useDispatch();

  const goodCount = useSelector((state) =>
    state.favorite.favorite.find((obj) => obj._id === _id),
  );

  const addedCount = goodCount ? goodCount.count : 0;

  const addFavorite = () => {
    const item = {
      _id: _id,
      name: name,
      price: price,
      image: image,
      count: 0,
    };
    dispatch(setGoodToFavorite(item));
  };

  const minusFavorite = () => {
    dispatch(setGoodMinus({ _id }));
  };

  return (
    sortedGoods && (
      <div>
        <ul className={styles.container}>
          <Link to={`/shop/${_id}`}>
            <li key={_id} className={styles.item}>
              <img src={image} alt={name} className={styles.item__image} />
              <h2 className={styles.item__name}>
                Назва товару : <span>{name}</span>
              </h2>
              <hr />
              <h4 className={styles.item__price}>
                Ціна : <span>{price} ГРН</span>
              </h4>

              <hr />
              {description ? (
                <h4 className={styles.item__description}>
                  Опис : <span>{description}</span>
                </h4>
              ) : (
                ''
              )}
            </li>
          </Link>
        </ul>
        <div className={styles.button__wrapper}>
          <button className={styles.add__favorite} onClick={addFavorite}>
            додати в корзину {addedCount > 0 && <span>{addedCount}</span>}
          </button>
          <button className={styles.minus__favorite} onClick={minusFavorite}>
            -
          </button>
        </div>
      </div>
    )
  );
};

export default Cart;
