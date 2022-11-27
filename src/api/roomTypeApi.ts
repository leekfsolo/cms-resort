import { IRoomType } from "pages/model";
import axiosClient from "./axiosClient";

export interface RoomTypeParam {
  roomtypeName: string;
  roomtypeArea: string;
  roomtypeDescription: string;
  roomtypeNoGuests: number;
  bedinforSize: number;
  bedinforNoBeds: number;
}

const roomTypeApi = {
  addRoomType: (data: IRoomType) => {
    const url = "/api/roomType";
    const { roomtypeArea, ...rest } = data;
    const params: RoomTypeParam = {
      ...rest,
      roomtypeArea: roomtypeArea + "m2",
    };
    return axiosClient.post(url, params);
  },
};

export default roomTypeApi;
