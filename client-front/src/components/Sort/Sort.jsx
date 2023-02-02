import React from 'react';
import styles from './Sort.module.scss';
import { GoodsContext } from '@hooks/GoodsCotext';

const Sort = ({ setVisibleText, setIsVisible }) => {
  const list = [{ name: 'від найдорожчого' }, { name: 'від найдешевшого' }];
  const { setIsDescSort } = React.useContext(GoodsContext);

  const changeSort = (name) => {
    setVisibleText(name);
    setIsVisible(false);
    if (name === 'від найдорожчого') {
      return setIsDescSort(true);
    } else {
      return setIsDescSort(false);
    }
  };

  return (
    <ul className={styles.container}>
      {list.map(({ name }, index) => (
        <li onClick={() => changeSort(name)} key={index}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default Sort;
