import axiosClient from "./axiosClient";

const customerApi = {
  getCustomers: () => {
    const url = "/api/customer";
    return axiosClient.get(url);
  },

  getCustomersByName: (name: string) => {
    const url = `/api/customer/${name}`;
    return axiosClient.get(url);
  },
};

export default customerApi;
