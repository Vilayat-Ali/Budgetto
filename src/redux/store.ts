// lib
import {configureStore} from '@reduxjs/toolkit';

// reducers
import {rootReducer} from './root.js';

export const store = configureStore({
  reducer: rootReducer,
});
