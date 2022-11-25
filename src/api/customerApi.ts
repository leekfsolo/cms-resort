import axiosClient from "./axiosClient";

const customerApi = {
  getCustomers: () => {
    const url = "/api/customer";
    return axiosClient.get(url);
  },

  getCustomerById: (id: string) => {
    const url = `/api/customer/${id}`;
    return axiosClient.get(url);
  },

  getCustomersByName: (name: string) => {
    const url = `/api/customer/getFilterCustomers`;
    return axiosClient.get(url, { params: { fullname: name } });
  },
};

export default customerApi;
