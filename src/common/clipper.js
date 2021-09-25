const copyToClipboard = (text = "") => {
  navigator.clipboard.writeText(text).catch(() => {
    // TODO: 失敗時
    window.alert("[Toggl Clipper] Failed.");
  });
};

export const clipper = async (model) => {
  await model.fetchItems().catch(() => {
    // TODO: 失敗時にはトースト?を出したい
  });
  console.log("**** \n", model.formattedText);
  copyToClipboard(model.formattedText);
};
