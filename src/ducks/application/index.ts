import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { appLocaleReducer } from './services/localeSlice';
import { appThemeReducer } from './services/themeSlice';

const localeConfig = {
  key: 'app/locale',
  storage,
};

const themeConfig = {
  key: 'app/theme',
  storage,
};

export const applicationReducers = combineReducers({
  locale: persistReducer(localeConfig, appLocaleReducer),
  theme: persistReducer(themeConfig, appThemeReducer),
});
