import React, { ReactPropTypes } from "react";
import Button from "@material-ui/core/Button";
import { clipper } from "../../common/clipper";
import { togglTask } from "../../common/toggl-task";

export default class PopupButton extends React.Component {
  constructor(props: ReactPropTypes) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(): void {
    clipper(togglTask);
  }

  render() {
    return (
      <Button variant="contained" onClick={this.handleOnClick}>
        クリップボードにコピー
      </Button>
    );
  }
}
