import React from "react";
import { render } from "react-dom";

import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

// You'll need to wrap <App /> for routing to work
render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
