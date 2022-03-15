import React, { useState } from "react";
import { login } from "../api";
import { Link, useHistory } from "react-router-dom";
const Login = ({ username, setUsername, password, setPassword, setLoginState, loginState }) => {
  const history = useHistory();
  const [displayError, setDisplayError] = useState(false)
  async function loginToken() {
    const response = await login(username, password);
    {
      response.data.token
        ? localStorage.setItem("token", response.data.token)
        : null;
    }
  }

  async function loginStateValid() {
    const response = await login(username, password);
    if (response.success) {
      setLoginState(true);
      setDisplayError(false)
      loginToken();
    } else {
      setLoginState(false);
      setDisplayError(true)
    }
  }



  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          loginStateValid();
          history.push('/home')
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
      {displayError? <div> Username and Password Does Not Exist! </div> : null}
      <Link to="./Signup">Don't have an account? Sign Up!</Link>
    </>
  );
};

export default Login;
