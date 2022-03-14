import React, { useState, useEffect } from "react";
import { register } from "../api";


const Signup = ({ username, setUsername, password, setPassword }) => {
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [validated, setValidated] = useState(true)
    function valid(){
        if(password === confirmedPassword){
            setValidated(true) 
        }
        else{
            setValidated(false)
        }
    }
    async function getToken(){
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
        onSubmit={async (event) => {
          event.preventDefault();
          valid()
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
        <input
          type="Text"
          placeholder="Confirm password"
          value={confirmedPassword}
          onChange={(event) => {
            setConfirmedPassword(event.target.value);
          }}
        ></input>
        <button type="submit"> Sign Up </button>
      </form>
      {validated ? getToken : <div>wrong</div>}
    </>
  );
};

export default Signup