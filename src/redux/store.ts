// lib
import {configureStore} from '@reduxjs/toolkit';

// reducers
import {rootReducer} from './root';

export const store = configureStore({
  reducer: rootReducer,
});
