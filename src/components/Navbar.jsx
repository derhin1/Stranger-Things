import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = ({ loginState, setLoginState }) => {
  const history = useHistory();

  return (
    <div id="navbar">
      <h2 id="logo"> Stranger's Things </h2>
      <Link className="headLink" to="../Home">
        Home
      </Link>
      <Link className="headLink" to="../Posts">
        Posts
      </Link>
      {loginState ? (
        <Link className="headLink" to="../Profile">
          Profile
        </Link>
      ) : (
        <Link className="headLink" to="../Login">
          Login
        </Link>
      )}
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
