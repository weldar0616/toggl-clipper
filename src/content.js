import { clipper } from './modules/clipper';
import { TogglTask } from './modules/toggl-task';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  clipper(new TogglTask());
  return;
});