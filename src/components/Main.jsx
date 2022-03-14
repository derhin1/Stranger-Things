import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Login, Navbar, Posts, Signup } from "./";
let URL = "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/";

const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/Home"></Route>
        <Route path="/Login">
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </Route>
        <Route path="/Signup">
          <Signup
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </Route>
        <Route path="/Posts">
          <Posts />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
