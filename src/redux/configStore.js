import { configureStore } from "@reduxjs/toolkit";
import DatVeReducer from "./DatVeReducer";

const store = configureStore({
  reducer: {
    DatVeReducer,
  },
});

export default store;
