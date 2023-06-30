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

export const deleteUser = createAsyncThunk(
  'users/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/add',
  async (body, { rejectWithValue }) => {
    try {
     const {data} = await axios.post('/users',body);
     return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
