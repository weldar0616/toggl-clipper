import React from 'react';
import SaveButton from './save-button';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* TODO: コンポーネント化 - mount時に初期値設定 */}
        <input type="text" id="input-api-token"></input>
        <SaveButton />
      </div>
    );
  }
}