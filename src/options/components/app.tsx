import React from 'react';
import { SaveButton } from './save-button';

export const App = () => {
  return (
    <div className="App">
      <input type="text" id="input-api-token"></input>
      <SaveButton />
    </div>
  );
};
