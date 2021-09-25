import React from 'react';
import Button from '@material-ui/core/Button';
import { save } from '../core';
import { TOGGL_REPORTS_API_TOKEN_KEY } from '../../common/const';

export default class SaveButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    // TODO: 他のコンポーネントの値取得方法
    const inputValue = document.getElementById("input-api-token").value.trim();
    save(TOGGL_REPORTS_API_TOKEN_KEY, inputValue);
  }

  render() {
    return (
      <Button variant="contained" onClick={this.handleOnClick}>保存</Button>
    );
  }
}