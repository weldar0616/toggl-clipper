export const save = async (key, value = "") => {
  return new Promise(resolve => {
    chrome.storage.local.set({ [key]: value }, () => {
      return resolve();
    });
  });
};

export const load = async (key) => {
  return new Promise(resolve => {
    chrome.storage.local.get([key], (items) => {
      return resolve(items[key]);
    });
  });
};
