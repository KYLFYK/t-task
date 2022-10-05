import { createSlice } from '@reduxjs/toolkit';
import { API } from '../../services';

interface IInitialState {
  addressesList: any[];
  loaded: boolean;
  errorOnLoad: boolean;
}

const initialState: IInitialState = {
  addressesList: [],
  loaded: false,
  errorOnLoad: false,
};

const addressesSlice = createSlice({
  name: 'addresses',
  initialState: initialState as IInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      API.endpoints.getAddressesListQuery.matchFulfilled,
      (state, { payload }) => {
        state.addressesList = payload;
        state.loaded = true;
        state.errorOnLoad = false;
      }
    );
    builder.addMatcher(
      API.endpoints.getAddressesListQuery.matchRejected,
      (state) => {
        state.errorOnLoad = true;
      }
    );
  },
});

export const addressesReducer = addressesSlice.reducer;
