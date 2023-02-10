import { configureStore } from '@reduxjs/toolkit';
import goodsSlice from './goods/goodsSlice';
import goodSlice from './goods/goodSlice';
import favoriteSlice from './favorite/favoriteSlice';

const store = configureStore({
  reducer: {
    goods: goodsSlice,
    good: goodSlice,
    favorite: favoriteSlice,
  },
});

export default store;
