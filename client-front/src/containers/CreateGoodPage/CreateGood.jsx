import React from 'react';
import styles from './CreateGood.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import icon from './image/back.svg';

import { createGood } from '@store/goods/goodSlice';

const CreateGood = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onClick = (data) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('image', data.image[0]);
    formData.append('description', data.description);

    dispatch(createGood(formData)).then((res) => {
      if (!res.error) {
        navigate(`/shop/${res.payload._id}`, {
          replace: true,
        });
      }
    });
  };

  // const handleCreateGood = React.useCallback(() => {

  //   const formData = new FormData();
  //   formData.append('name', name);
  //   formData.append('price', price);
  //   formData.append('image', image);
  //   formData.append('description', description);

  //   dispatch(createGood(formData)).then((res) => {
  //     if (!res.error) {
  //       navigate(`/shop/${res.payload._id}`, {
  //         replace: true,
  //       });
  //     }
  //   });
  // }, [name, price, image, description, dispatch, navigate]);

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onClick)}>
        <div className={styles.wrapper} onClick={() => navigate(-1)}>
          <img className={styles.arrow__back} src={icon} alt={icon} />
          <h1 className={styles.form__title}>Create Good</h1>
        </div>
        <input
          className={styles.form__input}
          type="text"
          placeholder="Name"
          {...register('name', { required: `Вкажіть назву товарку!` })}
        />
        <h6 className={styles.form__error}>{errors.name?.message}</h6>
        <input
          className={styles.form__input}
          type="text"
          placeholder="Price"
          {...register('price', { required: 'Вкажіть ціну товару!' })}
        />
        <h6 className={styles.form__error}>{errors.price?.message}</h6>
        <button
          className={styles.form__btn}
          onClick={() => document.getElementById('inputImage').click()}
        >
          Add image
        </button>
        <input
          className={styles.form__file}
          type="file"
          id="inputImage"
          {...register('image', { required: 'Вкажіть зображення товару!' })}
        />
        <h6 className={styles.form__error}>{errors.image?.message}</h6>

        <textarea
          className={styles.form__area}
          placeholder="Description. (Optional)"
          {...register('description', { required: 'Додайте опис товару!' })}
        />
        <h6 className={styles.form__error}>{errors.description?.message}</h6>
        <br />
        <button className={styles.form__submit} type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateGood;
