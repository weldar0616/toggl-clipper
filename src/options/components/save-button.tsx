import React from "react";
import Button from "@mui/material/Button";
import { saveChromeStorage } from "../../common/core";
import { TOGGL_REPORTS_API_TOKEN_KEY } from "../../common/const";

export const SaveButton = () => {
  const handleOnClick = () => {
    const elm: HTMLInputElement = document.getElementById(
      "input-api-token",
    ) as HTMLInputElement;
    const inputValue = elm?.value.trim();
    saveChromeStorage(TOGGL_REPORTS_API_TOKEN_KEY, inputValue);
  };

  return (
    <Button variant="outlined" onClick={handleOnClick}>
      保存
    </Button>
  );
};
