export const calculatePercentageOff = (
  mrp: number,
  sellingPrice: number
): string => {
  let percentageOff = ((mrp - sellingPrice) / mrp) * 100;
  return percentageOff.toFixed(0);
};
