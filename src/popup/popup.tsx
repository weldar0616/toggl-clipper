import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "./style.scss";

class Layout extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<Layout />, document.getElementById("app"));
