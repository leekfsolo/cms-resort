import { IFormLogin } from "pages/Auth/interface";
import axiosClient from "./axiosClient";

const authApi = {
  login: (data: IFormLogin) => {
    const url = "login";
    return axiosClient.post(url, data, { params: data });
  },
};

export default authApi;
