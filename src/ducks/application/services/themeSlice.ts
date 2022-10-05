import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeType = 'dark' | 'light';

interface InitialType {
  currentTheme: ThemeType;
  variants: ThemeType[];
}

const initialState: InitialType = {
  currentTheme: 'light',
  variants: ['light', 'dark'],
};

const appThemeSlice = createSlice({
  name: 'app/theme',
  initialState: initialState as InitialType,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeType>) {
      state.currentTheme = action.payload;
    },
  },
});

export const { setTheme } = appThemeSlice.actions;
export const appThemeReducer = appThemeSlice.reducer;
