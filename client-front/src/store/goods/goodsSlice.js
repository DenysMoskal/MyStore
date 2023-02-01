import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGoods = createAsyncThunk('goods/fetchGoods', async () => {
  const { data } = await axios('http://localhost:4000/goods/');

  return data;
});

const goodsSlice = createSlice({
  name: 'goods',
  initialState: {
    goods: {
      items: null,
      isError: false,
      isLoading: false,
    },
  },
  reducers: {},
  extraReducers: {
    [getGoods.pending]: (state) => {
      state.goods.isError = false;
      state.goods.isLoading = true;
      state.goods.items = null;
    },
    [getGoods.fulfilled]: (state, action) => {
      state.goods.isError = false;
      state.goods.isLoading = false;
      state.goods.items = action.payload;
    },
    [getGoods.rejected]: (state) => {
      state.goods.isError = true;
      state.goods.isLoading = false;
      state.goods.items = null;
    },
  },
});

export default goodsSlice.reducer;
