const scraping = (model) => {
  model.scraping();
};

const copyToClipboard = (text = "") => {
  navigator.clipboard.writeText(text).catch(() => {
    window.alert("[Toggl Clipper] Failed.");
  });
};

export const clipper = (model) => {
  const success = scraping(model);
  // TODO: 失敗時にはモーダルを出したい（alertは煩わしい）
  if (!success) {
    alert('scraping failed...');
    return;
  }
  copyToClipboard(model.formattedText);
};
