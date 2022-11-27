import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import roomTypeApi from "api/roomTypeApi";
import { IRoomType } from "pages/model";

export const initRoomtype: IRoomType = {
  roomtypeName: "",
  roomtypeArea: 0,
  roomtypeNoGuests: 0,
  roomtypeDescription: "",
  bedinforNoBeds: 1,
  bedinforSize: 1,
};

export const addRoomType = createAsyncThunk(
  "roomType/add",
  async (data: IRoomType) => {
    const res = await roomTypeApi.addRoomType(data);
    return res;
  }
);

const room = createSlice({
  name: "room",
  initialState: initRoomtype,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addRoomType.fulfilled, (state, action) => {
      state = action.payload.data;
    });
  },
});

export default room.reducer;
