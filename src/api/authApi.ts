import { IFormLogin } from "pages/Auth/interface";
import axiosClient from "./axiosClient";

const authApi = {
  login: (data: IFormLogin) => {
    const url = "/api/auth";
    return axiosClient.post(url, data);
  },
};

export default authApi;
