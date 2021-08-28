import React from 'react';
import Button from '@material-ui/core/Button';
import { sendToContents } from '../popup';

export default class PopupButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    sendToContents();
  }

  render() {
    return (
      <Button variant="contained" onClick={this.handleOnClick}>クリップボードにコピー</Button>
    );
  }
}