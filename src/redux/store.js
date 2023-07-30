import { configureStore } from "@reduxjs/toolkit";
import pcbuilderReducer from "../redux/features/pcbuilderSlice";
export const store = configureStore({
  reducer: {
    pcbuilder: pcbuilderReducer,
  },
});
