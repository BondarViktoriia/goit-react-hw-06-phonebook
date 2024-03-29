import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterByName: {
      reducer(state, action) {
        return (state = action.payload);
      },
    },
  },
});

export const { filterByName } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
