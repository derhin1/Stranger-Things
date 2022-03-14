import React, { useState, useEffect } from "react";
import { register } from "../api";


const Signup = ({ username, setUsername, password, setPassword }) => {
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [validated, setValidated] = useState(true)
    function valid(){
        if(password === confirmedPassword){
          console.log(validated, 'function-true')
            setValidated(true) 
        }
        else{
          
            setValidated(false)
            console.log(validated, "function-false");
        }
    }
    async function getToken(){
        const response = await register(username, password);
        // console.log('test')
            {
              response.data.token
                ? localStorage.setItem("token", response.data.token)
                : null;
            }
       
    }
  useEffect(()=>{
    console.log(validated, 'useeffect')
    {validated ? getToken() : null}
  },[validated])



  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          valid();
          console.log(validated, 'validated');
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
      {validated ? null: <div>Passwords do not match.</div>}
    </>
  );
};

export default Signup