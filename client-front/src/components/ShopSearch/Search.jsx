import React from 'react';
import styles from './Search.module.scss';

import { GoodsContext } from '@hooks/GoodsCotext';

const Search = () => {
  const { text, setText } = React.useContext(GoodsContext);

  return (
    <input
      type="text"
      placeholder="Search"
      className={styles.input}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default Search;
