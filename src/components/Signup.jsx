import React, {useState} from "react";
import { register } from "../api";
const SignUp = () => {
    const [username,setUsername] = useState ("")
    const [password,setPassword] = useState ("")
return (

<form onSubmit={async (event) => {
    event.preventDefault()
    console.log (username)
    console.log (password)

    const response = await register (username, password)
    console.log (response)
    }}>
    <input type="Text" placeholder = "username" value={username} onChange={(event) => {setUsername (event.target.value)}} ></input>
    <input type="Text" placeholder = "password" value={password}onChange={(event) => {setPassword (event.target.value)}}></input>
    <button type ="submit"> Sign Up </button>
</form>


)
}

export default SignUp