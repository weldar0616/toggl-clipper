import { Clippable } from './model/clippable';
import { getTodaysTogglReportsCollection } from './api/togglReportApi';
import { TogglReportEntity } from './model/togglReport';

class TogglTask implements Clippable {
  private items: TogglReportEntity[] = [];

  async fetchItems(): Promise<void> {
    this.items = await getTodaysTogglReportsCollection();
    console.log('TogglTask#fetchItems items', this.items); // TEST
    return Promise.resolve();
  }

  get formattedText(): string {
    const taskList = (): string => {
      let ret = '';
      for (const item of this.items) {
        ret += `・(${item.time}h) ${item.title}\n`;
      }
      return ret;
    };
    let ret = '本日の業務を終了いたします\n';
    ret += 'やったこと\n';
    ret += taskList();
    ret += 'やること\n';
    ret += '\n';
    ret += '困りごと\n';
    ret += '・特になし';
    return ret;
  }
}
export const togglTask = new TogglTask();
