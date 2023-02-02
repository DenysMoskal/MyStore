import React from 'react';
import styles from './ToolBar.module.scss';

import Sort from '@components/Sort';

const ToolBar = ({ items, setIsDescSort, isDescSort }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [visibleText, setVisibleText] = React.useState('від найдорожчого');

  const onClick = () => {
    setIsVisible(!isVisible);
  };

  console.log(items);

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
      {isVisible ? (
        <Sort
          setVisibleText={setVisibleText}
          setIsVisible={setIsVisible}
          setIsDescSort={setIsDescSort}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default ToolBar;
