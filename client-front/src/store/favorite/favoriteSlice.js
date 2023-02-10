import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
    fullPrice: 0,
  },
  reducers: {
    setGoodToFavorite: (state, action) => {
      const findItem = state.favorite.find(
        (obj) => obj._id === action.payload._id,
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.favorite.push({
          ...action.payload,
          count: 1,
        });
      }
      state.fullPrice = state.favorite.reduce((accum, item) => {
        accum = accum + item.price * item.count;
        return accum;
      }, 0);
    },
    setGoodMinus: (state, action) => {
      const findItem = state.favorite.find((obj) => obj._id === action.payload);

      if (findItem.count > 1) {
        findItem.count--;
      } else {
        state.favorite = state.favorite.filter(
          (obj) => obj._id !== action.payload,
        );
      }

      state.fullPrice -= findItem.price;
    },
    setGoodRemove: (state, action) => {
      const findItem = state.favorite.find(
        (obj) => obj.id === action.payload._id,
      );

      state.favorite = state.favorite.filter(
        (obj) => obj._id !== action.payload,
      );
      state.fullPrice -= findItem.price * findItem.count;
    },
    setGoodClear: (state) => {
      state.favorite = [];
      state.fullPrice = 0;
    },
  },
});

export const { setGoodToFavorite, setGoodMinus, setGoodClear, setGoodRemove } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
