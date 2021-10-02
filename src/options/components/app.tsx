import React from 'react';
import { Button } from '@mui/material';
import { PasswordInput } from './passwordInput';
import { TOGGL_REPORTS_API_TOKEN_KEY } from '../../common/const';
import { loadChromeStorage, saveChromeStorage } from '../../common/core';

interface State {
  apiToken: string;
}

export const App = () => {
  const [userSettings, setUserSettings] = React.useState<State>({
    apiToken: '',
  });

  React.useEffect(() => {
    loadChromeStorage(TOGGL_REPORTS_API_TOKEN_KEY).then(setApiToken);
  });

  const handleOnClick = () => {
    saveChromeStorage(TOGGL_REPORTS_API_TOKEN_KEY, userSettings.apiToken);
  };

  const setApiToken = (value: string) => {
    setUserSettings({ apiToken: value });
  };

  return (
    <div className="App">
      <PasswordInput
        label="API Token"
        edittingValue={userSettings.apiToken}
        onEdittingValueUpdated={setApiToken}
      />
      {/* TODO: Buttonの配置を右端に */}
      <Button variant="outlined" onClick={handleOnClick}>
        保存
      </Button>
    </div>
  );
};
