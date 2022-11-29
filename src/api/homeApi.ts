import axiosClient from "./axiosClient";

const homeApi = {
  getBranches: () => {
    const url = "/api/branch";
    return axiosClient.get(url);
  },
};

export default homeApi;
