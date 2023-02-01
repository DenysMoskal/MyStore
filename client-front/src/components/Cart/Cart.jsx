import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Cart.module.scss';

const Cart = ({ items }) => {
  console.log(items);

  return (
    <ul className={styles.container}>
      {items &&
        items.map(({ _id, name, price, image, description }) => (
          <Link to="???">
            <li key={_id} className={styles.item}>
              <img src={image} alt={name} className={styles.item__image} />
              <h2 className={styles.item__name}>
                Назва товару : <span>{name}</span>
              </h2>
              <hr />
              <h4 className={styles.item__price}>
                {' '}
                Ціна : <span>{price} ГРН</span>
              </h4>
              <hr />
              <h4 className={styles.item__description}>
                Опис : <span>{description}</span>
              </h4>
            </li>
          </Link>
        ))}
    </ul>
  );
};

export default Cart;
