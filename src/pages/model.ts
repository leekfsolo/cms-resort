import { HTMLInputTypeAttribute } from "react";

export interface IAddRoomTypeInput {
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  id: string;
  name: keyof IRoomType;
  items?: IAddRoomTypeInput[];
}

export interface IRoomType {
  roomTypeName: string;
  area: number;
  maxGuests: number;
  otherDescription: string;
  bedInfo?: string;
  bedSize?: number;
  bedQuantity?: number;
}

export interface IBedInfo {
  bedSize: number;
  bedQuantity: number;
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
