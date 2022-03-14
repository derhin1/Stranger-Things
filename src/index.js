import React, { useState } from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";
import { Main, SignUp, Navbar, Posts } from "./components";
const [token, setToken] = useState("");

ReactDom.render(
  <Router>
    <Navbar />
    <Switch>
      <Route path="/Home">
        <Main />
      </Route>
      <Route path="/Login">
        <SignUp setToken={setToken} />
      </Route>
      <Route path="/Posts">
        <Posts />
      </Route>
    </Switch>
  </Router>,

  document.getElementById("app")
);
