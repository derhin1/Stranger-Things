import React, { useState } from "react";
import { login } from "../api";
import { Link } from "react-router-dom";
const Login = ({ username, setUsername, password, setPassword }) => {
  const [loginState, setLoginState] = useState(false);
  async function loginToken() {
    const response = await login(username, password);
    console.log(response.success);
    {
      response.data.token
        ? localStorage.setItem("token", response.data.token)
        : null;
    }
  }

  async function loginStateValid() {
    const response = await login(username, password);
    if (response.success) {
      setLoginState(false);
      loginToken();
    } else {
      setLoginState(true);
    }
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          loginStateValid();
        }}
      >
        <input
          type="Text"
          placeholder="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
        <input
          type="Text"
          placeholder="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <button type="submit"> Login </button>
      </form>
      {loginState ? <div> Username and Password Does Not Exist! </div> : null}
      <Link to="./Signup">Don't have an account? Sign Up!</Link>
    </>
  );
};

export default Login;
