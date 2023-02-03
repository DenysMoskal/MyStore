import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Cart.module.scss';
import { GoodsContext } from '@hooks/GoodsCotext';

const Cart = ({ sortedGoods }) => {
  const { text } = React.useContext(GoodsContext);

  return (
    <ul className={styles.container}>
      {sortedGoods &&
        sortedGoods
          .filter(({ name }) => {
            if (!text) {
              return true;
            }
            return name.toString().toLowerCase().includes(text.toLowerCase());
          })
          .map(({ _id, name, price, image, description }) => (
            <Link to={`/:${_id}`}>
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
          ))}
    </ul>
  );
};

export default Cart;
