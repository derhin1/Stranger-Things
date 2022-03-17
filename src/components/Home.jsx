import React from "react";
const Home = ({ loginState, userObj }) => {
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  return (
    <>
      <h1> Welcome to Stranger's Things!</h1>
      <h2> The best place to bargain! </h2>
      {userObj != null ? <div> Hello and Welcome {`${userObj.username}`}</div> : ( <div>Currently not Logged In</div>)}
        
    </>
  );
};

export default Home;
