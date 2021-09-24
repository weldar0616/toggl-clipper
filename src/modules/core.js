// YYYY-MM-DD
export const getNowYMD = () => {
  const date = new Date();
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, '0');
  const d = `${date.getDate() - 1}`.padStart(2, '0'); // TEST
  return `${y}-${m}-${d}`;
};

export const ms2hour = (msTime) => {
  return msTime / (1000 * 60 * 60);
};

export const floorDecimalPlace = (val, decimalPlace = 1) => {
  return Math.floor(val * (10 ** decimalPlace)) / (10 ** decimalPlace);
};