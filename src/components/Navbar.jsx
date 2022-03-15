import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = ({loginState, setLoginState}) => {

 
  return (
    <div id="navbar">
      <Link to="./Home">Home</Link>
      <Link to="./Posts">Posts</Link>
      <Link to="./Login">Login</Link>
      {loginState ? (
        <form
          onSubmit={() => {
            setLoginState(false)
            localStorage.clear();
          }}
        >
          <button type="submit"> Sign Out</button>
        </form>
      ) : null}
    </div>
  );
};

export default Navbar;
