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
    add: (state: any, action: any) => {
      state.sections.push(action.payload);
    },
    // remove a section
    remove: (state: any, action: any) => {
      state.sections = state.sections.filter(
        (section: any) => section.id !== action.payload,
      );
    },
  },
});

export const getSectionState = (state: any) => state.section;
export const {add, remove} = sectionSlice.actions;
export const sectionReducer = sectionSlice.reducer;
