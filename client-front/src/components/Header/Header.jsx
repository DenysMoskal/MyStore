import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

import shop from './image/shop.svg';

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={shop} alt="shop" className={styles.image} />
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create good</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
