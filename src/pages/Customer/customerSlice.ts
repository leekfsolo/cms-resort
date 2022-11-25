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

export const getCustomerById = createAsyncThunk(
  "customer/list/{id}",
  async (name: string) => {
    const res = await customerApi.getCustomersByName(name);
    return res;
  }
);

export const getCustomersByName = createAsyncThunk(
  "customer/list/filteredByName",
  async (name: string) => {
    const res = await customerApi.getCustomersByName(name);
    return res;
  }
);

const customer = createSlice({
  name: "customer",
  initialState: initCustomer,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCustomers.fulfilled, (state, action) => {
        const { data } = action.payload;
        const transformedData = data.map((row: any) => {
          delete row.bookingReservations;
          return row;
        });
        state.data = transformedData;
      })
      .addCase(getCustomers.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(getCustomersByName.fulfilled, (state, action) => {
        const { data } = action.payload;
        const transformedData = data.map((row: any) => {
          delete row.bookingReservations;
          return row;
        });
        state.data = transformedData;
      })
      .addCase(getCustomersByName.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

const { reducer } = customer;
export default reducer;
