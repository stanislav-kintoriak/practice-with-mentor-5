import { fetchAll, fetchOne } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: null,
    users: [],
    isLoading: false,
    error: '',
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAll.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAll.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = payload;
        state.error = '';
      })
      .addCase(fetchAll.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchOne.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchOne.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentUser = payload;
        state.error = '';
      })
      .addCase(fetchOne.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export const userReducer = usersSlice.reducer;
