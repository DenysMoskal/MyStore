import React from 'react';
import styles from './ToolBar.module.scss';

import Sort from '@components/Sort';
import Search from '@components/ShopSearch/';

const ToolBar = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [visibleText, setVisibleText] = React.useState('від найдорожчого');

  const onClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.items}>
        <li>
          <button className={styles.sort} onClick={onClick}>
            Сортувати: {visibleText}
          </button>
        </li>
        <li className={styles.item__name}>Shop</li>
        <li>
          <button>Add good</button>
        </li>
      </ul>
      <Search />
      {isVisible ? (
        <Sort setVisibleText={setVisibleText} setIsVisible={setIsVisible} />
      ) : (
        ''
      )}
    </div>
  );
};

export default ToolBar;
