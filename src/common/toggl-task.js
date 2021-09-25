import { getNowYMD, ms2hour, floorDecimalPlace, load } from './core';
import { TOGGL_REPORTS_API_TOKEN_KEY } from './const';

class TogglTask {
  constructor() {
    this._items = [];
    this._token = "";
    this.loadApiToken();
  }

  async loadApiToken() {
    const token = await load(TOGGL_REPORTS_API_TOKEN_KEY);
    this._token = token;
    if (token !== "") return;
  }

  async fetchItems() {
    const API_URL = `https://toggl.com/reports/api/v2/summary?user_agent=test&workspace_id=5385719&since=${getNowYMD()}`;
    const username = this._token;
    const password = "api_token";
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${(btoa(username + ':' + password))}`,
      }
    };
    const response = await fetch(API_URL, options);
    const togglData = await response.json();
    if (togglData.error) {
      return Promise.reject();
    }

    this._items = togglData.data.map(data => new TogglTaskItem({ title: data.title.project, time: ms2hour(data.time) }));

    console.log("*** this._items", this._items);
    return Promise.resolve(togglData);
  }

  get formattedText() {
    const taskList = () => {
      let ret = "";
      for (const item of this._items) {
        ret += `・(${item.time}h) ${item.title}\n`;
      }
      return ret;
    };
    let ret = "本日の業務を終了いたします\n";
    ret += "やったこと\n";
    ret += taskList();
    ret += "やること\n";
    ret += "\n";
    ret += "困りごと\n";
    ret += "・特になし";
    return ret;
  }
}
export const togglTask = new TogglTask();

class TogglTaskItem {
  constructor(args) {
    this._title = args.title;
    this._time = floorDecimalPlace(args.time, 2);
  }
  get title() { return this._title; }
  get time() { return this._time; }
}
