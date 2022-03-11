import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div id='navbar'>
        <Link to='./Home'>Home</Link>
        <Link to ='./Posts'>Posts</Link>
        <Link to ='./Login'>Login</Link>
        </div>

    )
}

export default Navbar