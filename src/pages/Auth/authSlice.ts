import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "api/authApi";
import Config from "configuration";
import { IFormLogin } from "./interface";

const initialAuth = () => {
  const auth = sessionStorage.getItem(Config.storageKey.auth);
  if (auth) {
    return { ...JSON.parse(auth) };
  }
  return { id: "", name: "", status: false };
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: IFormLogin) => {
    const res = authApi.login(data);
    return res;
  }
);

const auth = createSlice({
  name: "auth",
  initialState: initialAuth(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state = action.payload;
      sessionStorage.setItem(Config.storageKey.auth, JSON.stringify(state));
      return state;
    });
  },
});

export const { actions, reducer } = auth;
export default reducer;
