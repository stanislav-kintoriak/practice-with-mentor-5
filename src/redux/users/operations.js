import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://648c9c148620b8bae7ed221a.mockapi.io';

export const fetchAll = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchOne = createAsyncThunk(
  'users/fetchOne',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/users/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
