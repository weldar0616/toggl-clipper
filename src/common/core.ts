// YYYY-MM-DD
export const getNowYMD = () => {
  const date = new Date();
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, '0');
  const d = `${date.getDate()}`.padStart(2, '0'); // TEST: 日付調整はここで
  return `${y}-${m}-${d}`;
};

export const ms2hour = (msTime: number) => {
  return msTime / (1000 * 60 * 60);
};

export const floorDecimalPlace = (val: number, decimalPlace: number = 1) => {
  return Math.floor(val * 10 ** decimalPlace) / 10 ** decimalPlace;
};

export const saveChromeStorage = async (key: string, value: string = '') => {
  return new Promise<void>((resolve) => {
    chrome.storage.local.set({ [key]: value }, () => {
      return resolve();
    });
  });
};

export const loadChromeStorage = async (key: string) => {
  return new Promise<string>((resolve) => {
    chrome.storage.local.get([key], (items) => {
      return resolve(items[key]);
    });
  });
};
