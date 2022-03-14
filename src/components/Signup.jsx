import React, {useState, useEffect} from "react";
import { register } from "../api";
const SignUp = ({setToken}) => {
    const [username,setUsername] = useState ("")
    const [password,setPassword] = useState ("")
    useEffect(() => {
        const localToken = localStorage.getItem("token");
        if (localToken != "") {
          setToken(localToken);
        }
      }, [token]);
    return (

<form onSubmit={async (event) => {
    event.preventDefault()
    console.log (username)
    console.log (password)

    const response = await register (username, password)
    localStorage.setItem("token", response.data.token)
    console.log (localStorage.getItem("token"))
    }}>
    <input type="Text" placeholder = "username" value={username} onChange={(event) => {setUsername (event.target.value)}} ></input>
    <input type="Text" placeholder = "password" value={password}onChange={(event) => {setPassword (event.target.value)}}></input>
    <button type ="submit"> Sign Up </button>
</form>


)
}

export default SignUp