import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Login,
  Navbar,
  Posts,
  Signup,
  AddNewPost,
  Profile,
  AllPostInfo,
  Home,
} from "./";
import { fetchMe } from "../api";
let URL = "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/";

const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginState, setLoginState] = useState(false);
  const [userObj, setUserObj] = useState({});

  function initialLoginCheck() {
    if (localStorage.getItem("token")) {
      setLoginState(true);
    } else setLoginState(false);
  }

  async function getMe() {
    let token = localStorage.getItem("token");
    let data = await fetchMe(token);
    setUserObj(data.data);
  }

  useEffect(() => {
    initialLoginCheck();
  }, []);

  useEffect(() => {
    getMe();
  }, [loginState]);
  return (
    <div>
      <Navbar loginState={loginState} setLoginState={setLoginState} />
      <Switch>
        <Route path="/Home">
          <Home loginState={loginState} userObj={userObj} />
        </Route>
        <Route path="/Login">
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            setLoginState={setLoginState}
            loginState={loginState}
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
        <Route exact path="/Posts">
          <Posts loginState={loginState} userObj={userObj} />
        </Route>
        <Route path="/AddNewPost">
          <AddNewPost loginState={loginState} />
        </Route>
        <Route path="/Posts/:id">
          <AllPostInfo userObj={userObj} />
        </Route>
        <Route path="/Profile">
          <Profile userObj={userObj} />
        </Route>
        <Route path="/">
          <Home loginState={loginState} userObj={userObj} />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
