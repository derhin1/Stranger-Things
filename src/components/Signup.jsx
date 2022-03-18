import React, { useState, useEffect } from "react";
import { register } from "../api";
import { useHistory } from "react-router-dom";

const Signup = ({ username, setUsername, password, setPassword }) => {
  const history = useHistory();
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [validated, setValidated] = useState(false);
  function valid() {
    if (password === confirmedPassword) {
      setValidated(false);
      getToken();
    } else {
      setValidated(true);
    }
  }
  async function getToken() {
    const response = await register(username, password);
    {
      response.data.token
        ? localStorage.setItem("token", response.data.token)
        : null;
    }
  }

  return (
    <>
      <form
        id="FormContainers"
        onSubmit={(event) => {
          event.preventDefault();
          valid();
          history.push("/Login");
          setUsername("");
          setPassword("");
        }}
      >
        <h1 id="HeadLog"> Sign Up! </h1>
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
        <input
          type="Text"
          placeholder="Confirm password"
          value={confirmedPassword}
          onChange={(event) => {
            setConfirmedPassword(event.target.value);
          }}
        ></input>
        <button type="submit"> Sign Up </button>
        {validated ? <div>Passwords do not match.</div> : null}
      </form>
    </>
  );
};

export default Signup;
