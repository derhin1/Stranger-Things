import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Main, SignUp } from "./components";

ReactDom.render(
  <Router>
    <SignUp />
    <Main />
  </Router>,
  document.getElementById("app")
);
