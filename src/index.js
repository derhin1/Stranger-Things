import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Main, SignUp, Navbar } from "./components";

ReactDom.render(
  <Router>
    <Navbar />
    <Route path='/Home'>
      <Main />
    </Route>
    <Route path='/Login'>
      <SignUp />
    </Route>
  </Router>,
  document.getElementById("app")
);
