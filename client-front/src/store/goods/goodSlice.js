import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGood = createAsyncThunk('good/fetchGood', async (id) => {
  const { data } = await axios(`http://localhost:4000/goods/${id}`);

  return data;
});

export const createGood = createAsyncThunk('CREATE_GOOD', async (planeData) => {
  const { data } = await axios.post('http://localhost:4000/goods/', planeData);

  return data;
});

const goodSlice = createSlice({
  name: 'good',
  initialState: {
    good: {
      item: null,
      isError: false,
      isLoading: false,
      errors: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGood.pending, (state) => {
      state.good.isError = false;
      state.good.isLoading = true;
      state.good.item = null;
    });
    builder.addCase(getGood.fulfilled, (state, action) => {
      state.good.isError = false;
      state.good.isLoading = false;
      state.good.item = action.payload[0];
    });
    builder.addCase(getGood.rejected, (state) => {
      state.good.isError = true;
      state.good.isLoading = false;
      state.good.item = null;
    });
    builder.addCase(createGood.pending, (state) => {
      state.good.isError = false;
      state.good.isLoading = true;
      state.good.item = null;
      state.good.errors = null;
    });
    builder.addCase(createGood.fulfilled, (state) => {
      state.good.isError = false;
      state.good.isLoading = false;
      state.good.errors = null;
    });
    builder.addCase(createGood.rejected, (state, action) => {
      state.good.isError = true;
      state.good.isLoading = false;
      state.good.errors = action.payload;
    });
  },
});

export default goodSlice.reducer;
