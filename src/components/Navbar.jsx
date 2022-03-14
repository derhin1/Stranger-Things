import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="./Home">Home</Link>
      <Link to="./Posts">Posts</Link>
      <Link to="./Login">Login</Link>
      {localStorage.getItem("token") ? (
        <form
          onSubmit={() => {
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
