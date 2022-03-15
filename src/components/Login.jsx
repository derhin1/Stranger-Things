import React, {useState} from "react";
import { login} from "../api";
import { Link } from "react-router-dom";
const Login = ({username, setUsername, password, setPassword}) => {
const [loginstate, setloginstate]= useState (false)
    return (
      <>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const response = await login(username, password);
            {
              response.success ? setloginstate (true)  : setloginstate (false) 
              response.data.token
                ? localStorage.setItem("token", response.data.token)
                : null;
            }
            console.log (response.success)
        
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
            {loginstate ? null :
            username ?
            password ? <div> Username and Password Does Not Exist! </div> : null : null}
        <Link to ='./Signup'>Don't have an account? Sign Up!</Link>
      </>
    );
}

export default Login