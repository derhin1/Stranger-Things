import React from "react";
const Home = ({ userObj }) => {
  return (
    <div id="Welcome">
      <h1> Greetings, You Found Stranger's Things!</h1>
      <h2> The best place to BarGAIN! </h2>
      {userObj != null ? (
        <div id="Greetings">
          {" "}
          Hello and Welcome <span id="User">{`${userObj.username}`}!</span>
        </div>
      ) : (
        <div id="Notice">
          Please Note: You are not currently Logged In. Please Log In and begin
          to BarGAIN!
        </div>
      )}
    </div>
  );
};

export default Home;
