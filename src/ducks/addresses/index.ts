import { combineReducers } from '@reduxjs/toolkit';
import { addressesReducer } from './addressesSlice';

export const addressesRootReducer = combineReducers({
  list: addressesReducer,
});
