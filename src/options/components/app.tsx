import React from 'react';
import SaveButton from './save-button';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <input type="text" id="input-api-token"></input>
        <SaveButton />
      </div>
    );
  }
}