import { RootState } from "./store";

export const authSelector = (state: RootState) => state.auth;

export const globalSelector = (state: RootState) => state.global;

export const customerSelector = (state: RootState) => state.customer;

export const homeSelector = (state: RootState) => state.home;
