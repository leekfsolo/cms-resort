export interface CustomerData {
  id: string;
  CCCD: string;
  fullname: string;
  phone: string;
  mail: string;
  username: string;
  score: number;
  type: number;
}

export interface CustomerHeadCell {
  id: keyof CustomerData;
  label: string;
}
