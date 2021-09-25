import { ClippableModel } from "./interfaces";

const copyToClipboard = (text: string = "") => {
  navigator.clipboard.writeText(text).catch(() => {
    window.alert("[Toggl Clipper] Failed.");
  });
};

export const clipper = async (model: ClippableModel) => {
  await model.fetchItems().catch(() => {
    window.alert("[Toggl Clipper] Failed.");
  });
  console.log("**** \n", model.formattedText); // TEST
  copyToClipboard(model.formattedText);
};
