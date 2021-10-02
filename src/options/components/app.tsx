import React from 'react';
import { Alert, Box, Button, Snackbar } from '@mui/material';
import { PasswordInput } from './passwordInput';
import {
  TOGGL_REPORTS_API_TOKEN_KEY,
  TOGGL_REPORTS_WORKSPACE_ID,
} from '../../common/const';
import { loadChromeStorage, saveChromeStorage } from '../../common/core';

const SETTINGS_LABEL = {
  workspaceId: 'workspaceId',
  apiToken: 'apiToken',
};

enum AlertType {
  NONE,
  SUCCESS,
  ERROR,
}

export const App = () => {
  const [workspaceId, setWorkspaceId] = React.useState('');
  const [apiToken, setApiToken] = React.useState('');
  const [alertType, setAlertType] = React.useState<AlertType>(AlertType.NONE);

  React.useEffect(() => {
    loadChromeStorage(TOGGL_REPORTS_API_TOKEN_KEY).then((response) => {
      if (response) setApiToken(response);
    });
    loadChromeStorage(TOGGL_REPORTS_WORKSPACE_ID).then((response) => {
      if (response) setWorkspaceId(response);
    });
  }, []);

  const handleOnClick = () => {
    Promise.all([
      saveChromeStorage(TOGGL_REPORTS_WORKSPACE_ID, workspaceId),
      saveChromeStorage(TOGGL_REPORTS_API_TOKEN_KEY, apiToken),
    ])
      .then(() => {
        setAlertType(AlertType.SUCCESS);
      })
      .catch(() => {
        setAlertType(AlertType.ERROR);
      });
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
      {alertType === AlertType.SUCCESS && (
        <Alert severity="success">Successful save settings.</Alert>
      )}
      {alertType === AlertType.ERROR && (
        <Alert severity="error">Fail save settings.</Alert>
      )}
    </div>
  );
};
