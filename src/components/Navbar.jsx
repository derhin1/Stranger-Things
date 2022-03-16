import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

const Navbar = ({ loginState, setLoginState }) => {
  const history = useHistory();

  return (
    <div id="navbar">
      <Link to="./Home">Home</Link>
      <Link to="./Posts">Posts</Link>
      <Link to="./Login">Login</Link>
      {loginState ? (
        <form
          onSubmit={() => {
            setLoginState(false);
            localStorage.clear();
            history.push("/home");
          }}
        >
          <button type="submit"> Sign Out</button>
        </form>
      ) : null}
    </div>
  );
};

export default Navbar;
