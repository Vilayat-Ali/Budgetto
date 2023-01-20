// lib
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  sections: [],
};

const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    // add a section
    add: (state, action) => {
      state.sections.push(action.payload);
    },
    // remove a section
    remove: (state, action) => {
      state.sections = state.sections.filter(
        section => section.id !== action.payload,
      );
    },
  },
});

export const getSectionState = state => state.section;
export const {add, remove} = sectionSlice.actions;
export const sectionReducer = sectionSlice.reducer;
