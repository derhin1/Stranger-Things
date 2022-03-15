import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Login, Navbar, Posts, Signup, AddNewPost } from "./";
let URL = "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/";

const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginState, setLoginState] = useState(false);

  function initialLoginCheck(){
    if(localStorage.getItem('token')){
      setLoginState(true)
    }
    else(
      setLoginState(false)
    )
  }

useEffect(() => {
   initialLoginCheck();
},[])

  return (
    <div>
      <Navbar loginState={loginState} setLoginState={setLoginState} />
      <Switch>
        <Route path="/Home"></Route>
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
        <Route path="/Posts">
          <Posts />
        </Route>
        <Route path="/AddNewPost">
          <AddNewPost loginState={loginState} />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
