import { HTMLInputTypeAttribute } from "react";

export interface IRegisterInput {
  label: string;
  required: boolean;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  id: string;
  options?: string[];
  name: keyof IFormRegister;
}

export interface IRegisterSection {
  title: string;
  items: IRegisterInput[];
}

export interface IFormRegister {
  username: string;
  fullname: string;
  phone: string;
  password: string;
  confirmPassword: string;
  accountRole: string;
}

export interface CustomerData {
  id: string;
  CCCD: string;
  fullname: string;
  phone: string;
  mail: string;
  username: string;
  score: number;
  type: number;
  bookingReservations: BookingData[];
}

export interface CustomerHeadCell {
  id: keyof CustomerData;
  label: string;
}

export interface BookingData {
  bookingId: string;
  bookingDatetime: string;
  checkinDate: string;
  checkoutDate: string;
  numberOfGuests: number;
  status: number;
  totalPrice: number;
  customerId: string;
  packageName: string;
}
export interface BookingHeadCell {
  id: keyof BookingData;
  label: string;
}
