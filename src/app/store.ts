import { configureStore } from "@reduxjs/toolkit";
import authReducer from "pages/Auth/authSlice";
import globalReducer from "./globalSlice";
import customerReducer from "pages/Customer/customerSlice";

const rootReducer = {
  auth: authReducer,
  global: globalReducer,
  customer: customerReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
