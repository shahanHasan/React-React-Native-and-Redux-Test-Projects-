import React from "react";
import ReactDOM from "react-dom";
import "./react-projects-master/15-cocktails/setup/src/index.css";
import App from "./react-projects-master/15-cocktails/setup/src/App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./react-projects-master/15-cocktails/setup/src/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
