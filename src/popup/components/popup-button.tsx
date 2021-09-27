import React from "react";
import Button from "@mui/material/Button";
import { clipper } from "../../common/clipper";
import { togglTask } from "../../common/toggl-task";

export const PopupButton = () => {
  const handleOnClick = () => {
    clipper(togglTask);
  };

  return (
    <Button variant="outlined" onClick={handleOnClick}>
      クリップボードにコピー
    </Button>
  );
};
