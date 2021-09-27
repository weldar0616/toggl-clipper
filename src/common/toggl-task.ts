import axios from 'axios';
import {
  getNowYMD,
  ms2hour,
  floorDecimalPlace,
  loadChromeStorage,
} from './core';
import { TOGGL_REPORTS_API_TOKEN_KEY } from './const';
import { ClippableModel } from './interfaces';

class TogglTask implements ClippableModel {
  private items: TogglTaskItem[] = [];
  private token: string = '';

  constructor() {
    this.loadApiToken();
  }

  async loadApiToken(): Promise<void> {
    const token: string = await loadChromeStorage(TOGGL_REPORTS_API_TOKEN_KEY);
    this.token = token;
  }

  async fetchItems(): Promise<void> {
    const username = this.token;
    const password = 'api_token';
    const client = axios.create({
      baseURL: 'https://toggl.com/reports/api/v2/',
      headers: {
        Authorization: `Basic ${btoa(username + ':' + password)}`,
      },
    });
    const path = `summary?user_agent=test&workspace_id=5385719&since=${getNowYMD()}`;
    const togglData = await client.get(path).then((response) => response.data);

    this.items = togglData.data.map(
      (data: any) => new TogglTaskItem(data.title.project, ms2hour(data.time)),
    );

    console.log('*** this.items', this.items); // TEST
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

class TogglTaskItem {
  private _title: string;
  private _time: number;

  constructor(title: string, time: number) {
    this._title = title;
    this._time = floorDecimalPlace(time, 2);
  }
  get title(): string {
    return this._title;
  }
  get time(): number {
    return this._time;
  }
}
