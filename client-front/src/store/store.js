import { configureStore } from '@reduxjs/toolkit';
import goodsSlice from './goods/goodsSlice';
import goodSlice from './goods/goodSlice';

const store = configureStore({
  reducer: {
    goods: goodsSlice,
    good: goodSlice,
  },
});

export default store;
