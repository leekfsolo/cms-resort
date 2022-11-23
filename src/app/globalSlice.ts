import { createSlice } from "@reduxjs/toolkit";

const global = createSlice({
  name: "global",
  initialState: { isLoading: false },
  reducers: {
    handleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

const { actions, reducer } = global;
export const { handleLoading } = actions;
export default reducer;
