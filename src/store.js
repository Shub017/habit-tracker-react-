import { configureStore } from "@reduxjs/toolkit";

import { habitListReducer } from "./Redux/habitList";
export const store = configureStore({
    reducer: { habitListReducer}
  });