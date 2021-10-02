import React from 'react';
import { saveChromeStorage } from '../../common/core';
import { TOGGL_REPORTS_API_TOKEN_KEY } from '../../common/const';
import { Button } from '@mui/material';

export const App = () => {
  const handleOnClick = () => {
    const elm: HTMLInputElement = document.getElementById(
      'input-api-token',
    ) as HTMLInputElement;
    const inputValue = elm?.value.trim();
    saveChromeStorage(TOGGL_REPORTS_API_TOKEN_KEY, inputValue);
  };

  return (
    <div className="App">
      <input type="text" id="input-api-token"></input>
      <Button variant="outlined" onClick={handleOnClick}>
        保存
      </Button>
    </div>
  );
};
