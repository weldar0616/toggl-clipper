import React, { ReactPropTypes } from "react";
import Button from "@mui/material/Button";
import { saveChromeStorage } from "../../common/core";
import { TOGGL_REPORTS_API_TOKEN_KEY } from "../../common/const";

export default class SaveButton extends React.Component {
  constructor(props: ReactPropTypes) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const elm: HTMLInputElement = document.getElementById(
      "input-api-token",
    ) as HTMLInputElement;
    const inputValue = elm?.value.trim();
    saveChromeStorage(TOGGL_REPORTS_API_TOKEN_KEY, inputValue);
  }

  render() {
    return (
      <Button variant="outlined" onClick={this.handleOnClick}>
        保存
      </Button>
    );
  }
}
