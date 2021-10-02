import axios, { AxiosResponse } from "axios";
import { TOGGL_REPORTS_API_TOKEN_KEY } from "../const";
import { floorDecimalPlace, getNowYMD, loadChromeStorage, ms2hour } from "../core";
import { TogglReportEntity } from "../model/togglReport";

const togglURL = "https://toggl.com";
const togglReportsUrl = `${togglURL}/reports/api/v2/`;
const togglTodaysReportsUrl = `${togglReportsUrl}summary?user_agent=test&workspace_id=5385719&since=${getNowYMD()}`;

export const getTodaysTogglReportsCollection = async (): Promise<TogglReportEntity[]> => {
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