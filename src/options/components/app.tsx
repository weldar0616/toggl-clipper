import React from 'react';
import { Button } from '@mui/material';
import { PasswordInput } from './passwordInput';
import {
  TOGGL_REPORTS_API_TOKEN_KEY,
  TOGGL_REPORTS_WORKSPACE_ID,
} from '../../common/const';
import { loadChromeStorage, saveChromeStorage } from '../../common/core';

interface State {
  workspaceId: string;
  apiToken: string;
}

const SETTINGS_LABEL = {
  workspaceId: 'workspaceId',
  apiToken: 'apiToken',
};

export const App = () => {
  const [workspaceId, setWorkspaceId] = React.useState('');
  const [apiToken, setApiToken] = React.useState('');

  React.useEffect(() => {
    loadChromeStorage(TOGGL_REPORTS_API_TOKEN_KEY).then((response) => {
      if (response) setApiToken(response);
    });
    loadChromeStorage(TOGGL_REPORTS_WORKSPACE_ID).then((response) => {
      if (response) setWorkspaceId(response);
    });
  }, []);

  const handleOnClick = () => {
    saveChromeStorage(TOGGL_REPORTS_WORKSPACE_ID, workspaceId);
    saveChromeStorage(TOGGL_REPORTS_API_TOKEN_KEY, apiToken);
  };

  return (
    <div className="App">
      <PasswordInput
        label={SETTINGS_LABEL.workspaceId}
        edittingValue={workspaceId}
        onEdittingValueUpdated={setWorkspaceId}
      />
      <PasswordInput
        label={SETTINGS_LABEL.apiToken}
        edittingValue={apiToken}
        onEdittingValueUpdated={setApiToken}
      />
      {/* TODO: Buttonの配置を右端に */}
      <Button variant="outlined" onClick={handleOnClick}>
        保存
      </Button>
    </div>
  );
};
