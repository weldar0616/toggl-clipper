import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app";
import "./style.scss";

const Layout = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

ReactDOM.render(<Layout />, document.getElementById("app"));
