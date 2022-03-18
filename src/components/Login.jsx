import React, { useState } from "react";
import { login } from "../api";
import { Link, useHistory } from "react-router-dom";
const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  setLoginState,
}) => {
  const history = useHistory();
  const [displayError, setDisplayError] = useState(false);
  async function loginToken() {
    const response = await login(username, password);
    {
      response.data.token
        ? localStorage.setItem("token", response.data.token)
        : null;
    }
    setLoginState(true);
  }

  async function loginStateValid() {
    const response = await login(username, password);
    if (response.success) {
      loginToken();
      setDisplayError(false);
      history.push("/home");
    } else {
      setLoginState(false);
      setDisplayError(true);
    }
  }

  return (
    <div>
      <form
        id="FormContainers"
        onSubmit={(event) => {
          event.preventDefault();
          loginStateValid();
          setUsername("");
          setPassword("");
        }}
      >
        <h1 id="HeadLog"> Log In </h1>
        <input
          type="Text"
          placeholder="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
        <input
          id="fields"
          type="Text"
          placeholder="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <button type="submit"> Login </button>
        <Link to="./Signup">Don't have an account? Sign Up!</Link>
        {displayError ? (
          <div id="Error">
            {" "}
            Oh no! Sorry, Username and Password Does Not Exist! Please Try
            Again.{" "}
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Login;
