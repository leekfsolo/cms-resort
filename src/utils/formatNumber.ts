export const formatString = (value: string) => {
  return value.length > 1 ? value : "0" + value;
};
