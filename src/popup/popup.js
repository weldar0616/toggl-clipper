export const sendToContents = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id,
      JSON.stringify({ contents: "test value from popup" }),
      (response) => {
      });
  });
};