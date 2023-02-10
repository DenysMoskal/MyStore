import React from 'react';
import empty from './image/empty.jpg';
import styles from './Empty.module.scss';

const Empty = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Корзина пуста</h2>
      <img className={styles.image} src={empty} alt="empty" />
    </div>
  );
};

export default Empty;
