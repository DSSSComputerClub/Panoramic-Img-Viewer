import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import App from "./scripts/App";

// Importing styles from styles folder
import "./styles/index.scss";
import "./styles/spacing.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
