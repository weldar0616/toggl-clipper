import { clipper } from '../modules/clipper';
import { TogglTask } from '../modules/toggl-task';

export const sendToContents = () => {
  clipper(new TogglTask());
};