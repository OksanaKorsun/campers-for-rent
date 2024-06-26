import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, filterCampers } from './operations';
const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState = {
  campers: [],
  favorite: [],
  filters: {
    location: "",
    equipment: {},
    vehicleType: '',
  },
  isLoading: false,
  error: null,
};
const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      state.favorite.push(payload);
    },
    deleteFavorite(state, { payload }) {
      const index = state.favorite.findIndex((item) => item._id === payload);
      state.favorite.splice(index, 1);
    },
    setVehicle(state, action) {
      state.filters.vehicleType = action.payload;
    },
    setEquipment(state, action) {
      state.filters.equipment = action.payload;
    },

    setLocation(state, action) {
      state.filters.location = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = [...state.campers, ...action.payload];
        // if (action.payload.page === 1) {
        //   // Якщо це перша сторінка, перезаписуємо список кемперів
        //   state.campers = action.payload;
        
        // } else {
        //   // Якщо це не перша сторінка, додаємо нові кемпери до існуючого списку
        //   state.campers = [...state.campers, ...action.payload];
        // }
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(filterCampers.pending, handlePending)
      .addCase(filterCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = action.payload;
      })
      .addCase(filterCampers.rejected, handleRejected);
  },
});
export const {
  setLocation,
  setVehicle,
  setEquipment,
  addFavorite,
  deleteFavorite,
} = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
