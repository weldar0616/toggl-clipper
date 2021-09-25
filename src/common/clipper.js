const copyToClipboard = (text = "") => {
  navigator.clipboard.writeText(text).catch(() => {
    window.alert("[Toggl Clipper] Failed.");
  });
};

export const clipper = async (model) => {
  await model.fetchItems().catch(() => {
    window.alert("[Toggl Clipper] Failed.");
  });
  console.log("**** \n", model.formattedText);
  copyToClipboard(model.formattedText);
};
