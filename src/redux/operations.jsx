import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://662039013bf790e070af52ea.mockapi.io/api';
export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ page, limit }, thunkAPI) => {
    try {
      const res = await axios.get('/adverts', {
        params: { limit: limit, page: page },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const filterCampers = createAsyncThunk(
  'campers/filter',
  async (filtersCriteria, thunkAPI) => {
    try {
      const res = await axios.get('/adverts', { params: filtersCriteria });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);