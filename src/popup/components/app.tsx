import { Button } from '@mui/material';
import React from 'react';
import { clipper } from '../../common/clipper';
import { togglTask } from '../../common/togglTask';

export const App = () => {
  const handleOnClick = () => {
    clipper(togglTask);
  };

  return (
    <div className="App">
      <Button variant="outlined" onClick={handleOnClick}>
        クリップボードにコピー
      </Button>
    </div>
  );
};
