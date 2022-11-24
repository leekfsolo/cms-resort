import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customerApi from "api/customerApi";
import { CustomerData } from "pages/model";

const initCustomer: { data: CustomerData[] } = {
  data: [],
};

export const getCustomers = createAsyncThunk("customer/list", async () => {
  const res = await customerApi.getCustomers();
  return res;
});

const customer = createSlice({
  name: "customer",
  initialState: initCustomer,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomers.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
  },
});

const { reducer } = customer;
export default reducer;
