import axios, { AxiosResponse } from "axios";
import { TOGGL_REPORTS_API_TOKEN_KEY, TOGGL_REPORTS_WORKSPACE_ID } from "../const";
import { floorDecimalPlace, getNowYMD, loadChromeStorage, ms2hour } from "../core";
import { TogglReportEntity } from "../model/togglReport";

const togglURL = "https://api.track.toggl.com";
const togglReportsUrl = `${togglURL}/reports/api/v2/`;

export const getTodaysTogglReportsCollection = async (): Promise<TogglReportEntity[]> => {
  const workspaceId: string = await loadChromeStorage(TOGGL_REPORTS_WORKSPACE_ID);
  const togglTodaysReportsUrl = `${togglReportsUrl}summary?user_agent=test&workspace_id=${workspaceId}&since=${getNowYMD()}`;

  const username: string = await loadChromeStorage(TOGGL_REPORTS_API_TOKEN_KEY);
  const password = 'api_token';
  const client = axios.create({
    headers: {
      Authorization: `Basic ${btoa(username + ':' + password)}`,
    },
  });

  const promise = new Promise<TogglReportEntity[]>((resolve, reject) => {
    try {
      client.get(togglTodaysReportsUrl).then(response => resolve(mapTogglReportsListApiToModel(response.data)))
    } catch (ex) {
      reject(ex);
    }
  });
  return promise;
};

const mapTogglReportsListApiToModel = ({ data }: AxiosResponse<any[]>): TogglReportEntity[] => {
  return data.map(data => ({
    title: data.title.project,
    time: floorDecimalPlace(ms2hour(data.time), 2),
  }));
};