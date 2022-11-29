import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import customerApi from "api/customerApi";
import moment from "moment";
import { BookingData, CustomerData } from "pages/model";

const initCustomer: { data: CustomerData[]; customerDetail: CustomerData } = {
  data: [],
  customerDetail: {
    bookingReservations: [],
    CCCD: "",
    fullname: "",
    id: "",
    mail: "",
    phone: "",
    score: -1,
    type: -1,
    username: "",
  },
};

export const getCustomers = createAsyncThunk("customer/list", async () => {
  const res = await customerApi.getCustomers();
  return res;
});

export const getCustomerById = createAsyncThunk(
  "customer/list/{id}",
  async (id: string) => {
    const res = await customerApi.getCustomerById(id);
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
      .addCase(
        getCustomerById.fulfilled,
        (state, action: PayloadAction<any>) => {
          const { data } = action.payload;
          const {
            customerCccdCmnd,
            bookingReservations,
            customerId,
            customerEmail,
            customerTelephone,
            customerUsername,
            customerScore,
            customerType,
            customerFullname,
          } = data;

          const transFormData = bookingReservations.map((item: BookingData) => {
            item.bookingDatetime = moment(item.bookingDatetime).format(
              "DD/MM/YYYY HH:mm"
            );
            item.checkinDate = moment(item.checkinDate).format("DD/MM/YYYY");
            item.checkoutDate = moment(item.checkoutDate).format("DD/MM/YYYY");

            return item;
          });

          state.customerDetail = {
            CCCD: customerCccdCmnd,
            bookingReservations: transFormData,
            fullname: customerFullname,
            id: customerId,
            mail: customerEmail,
            phone: customerTelephone,
            score: customerScore,
            type: customerType,
            username: customerUsername,
          };
        }
      )
      .addCase(getCustomerById.rejected, (state, action) => {
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
