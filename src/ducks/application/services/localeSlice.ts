import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LangType = 'ru' | 'en';

interface InitialType {
  lang: LangType;
  variants: LangType[];
}

const initialState: InitialType = {
  lang: 'ru',
  variants: ['ru', 'en'],
};

const appLocaleSlice = createSlice({
  name: 'app/locale',
  initialState: initialState as InitialType,
  reducers: {
    setLang(state, action: PayloadAction<LangType>) {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = appLocaleSlice.actions;
export const appLocaleReducer = appLocaleSlice.reducer;
