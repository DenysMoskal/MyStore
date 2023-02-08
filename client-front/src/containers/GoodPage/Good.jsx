import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getGood } from '@store/goods/goodSlice';

import NotFound from '@components/NotFound';

import styles from './Good.module.scss';

const Good = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { item, isError, isLoading } = useSelector((state) => state.good.good);

  React.useEffect(() => {
    dispatch(getGood(id));
  }, [id, dispatch]);

  return isError ? (
    <NotFound />
  ) : isLoading ? (
    <div>Loading...</div>
  ) : (
    item && (
      <div>
        <div className={styles.item}>
          <img
            className={styles.item__image}
            src={item.image}
            alt={item.name}
          />

          <div>
            <h1 className={styles.name}>{item.name}</h1>
            <h3 className={styles.item__description}>
              <span>Опис товару :</span> {item.description}
            </h3>
            <div className={styles.item__wrapper}>
              <h2 className={styles.item__price}>{item.price} UAH</h2>
              <button className={styles.btn}>Купити</button>
            </div>
          </div>
        </div>
        <button className={styles.back} onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    )
  );
};

export default Good;
