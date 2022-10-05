import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { applicationReducers } from './application';

const appReducer = combineReducers({
  application: applicationReducers,
});

export type RootCombine = ReturnType<typeof appReducer>;

export const rootReducer: Reducer = (state: RootCombine, action) => {
  return appReducer(state, action);
};
