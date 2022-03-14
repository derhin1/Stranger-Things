import React, {useState, useEffect} from "react";
import { register } from "../api";
import { Link } from "react-router-dom";
const Login = ({username, setUsername, password, setPassword}) => {

    return (
      <>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const response = await register(username, password);
            {
              response.data.token
                ? localStorage.setItem("token", response.data.token)
                : null;
            }
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
        <Link to ='./Signup'>Don't have an account? Sign Up!</Link>
      </>
    );
}

export default Login