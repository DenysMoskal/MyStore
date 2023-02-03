import React from 'react';
import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

import imageNotFound from './image/NotFound.png';

const NotFound = () => {
  return (
    <div>
      <h2 className={styles.text}>
        Не вдалось завантажити, спробуйте будь ласка пізніше
      </h2>
      <img className={styles.image} src={imageNotFound} alt="404" />
      <Link to="/">
        <button className={styles.btn}>Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
