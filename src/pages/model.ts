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
  numberOfGuests: number;
  checkoutDate: string;
  status: number;
  totalPrice: number;
  customerId: string;
  packageName: string;
}
