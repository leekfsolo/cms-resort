import { IRoomType } from "pages/model";
import axiosClient from "./axiosClient";

const roomTypeApi = {
  addRoomType: (data: IRoomType) => {
    const url = "/api/roomType";
    return axiosClient.post(url, data);
  },
};

export default roomTypeApi;
