import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGood = createAsyncThunk('good/fetchGood', async (id) => {
  const { data } = await axios(`http://localhost:4000/goods/${id}`);

  return data;
});

const goodSlice = createSlice({
  name: 'good',
  initialState: {
    good: {
      item: null,
      isError: false,
      isLoading: false,
    },
  },
  reducers: {},
  extraReducers: {
    [getGood.pending]: (state) => {
      state.good.isError = false;
      state.good.isLoading = true;
      state.good.item = null;
    },
    [getGood.fulfilled]: (state, action) => {
      state.good.isError = false;
      state.good.isLoading = false;
      state.good.item = action.payload[0];
    },
    [getGood.rejected]: (state) => {
      state.good.isError = true;
      state.good.isLoading = false;
      state.good.item = null;
    },
  },
});

export default goodSlice.reducer;
