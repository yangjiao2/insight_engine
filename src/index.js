import React from "react";
import ReactDOM from "react-dom";
// import { Router, HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { HashRouter as Router } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./assets/scss/style.scss";
import "./assets/scss/index.scss";
import "./App.css";

// StyletronProvider
// import { StyleReset } from "atomize";
// import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
// // import { Client as Styletron } from "styletron-engine-atomic";
// import { Server as Styletron } from "styletron-engine-atomic";

// const history = createBrowserHistory();

// const debug =
//   process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// // 1. Create a client engine instance
// const engine = new Styletron();
// const styles = engine.getStylesheetsHtml();

ReactDOM.render(
  <Router path="/">
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
