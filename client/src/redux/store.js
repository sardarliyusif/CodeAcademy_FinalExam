import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./cards/cardsSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
