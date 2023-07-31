import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pcomponents: {
    processor: null,
    motherboard: null,
    ram: null,
    storagedevice: null,
    powersupply: null,
    monitor: null,
    others: null,
  },
};

export const pcbuilderSlice = createSlice({
  name: "pcbuilder",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state.pcomponents = {
        ...state.pcomponents,
        [action.payload.componentName]: action.payload.component,
      };
    },
    removeFromBuilder: (state) => {
      state.value -= 1;
    },
  },
});

export const { addToBuilder, removeFromBuilder } = pcbuilderSlice.actions;

export default pcbuilderSlice.reducer;
