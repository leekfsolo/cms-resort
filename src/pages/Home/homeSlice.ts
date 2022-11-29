import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import homeApi from "api/homeApi";

export const initHome: { branches: string[] } = {
  branches: [],
};

export const getBranches = createAsyncThunk("branch/list", async () => {
  const res = await homeApi.getBranches();
  return res;
});

const home = createSlice({
  name: "home",
  initialState: initHome,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBranches.fulfilled, (state, action) => {
      state.branches = action.payload.data.map(
        (branch: any) => branch.branchId
      );
    });
  },
});

export default home.reducer;
