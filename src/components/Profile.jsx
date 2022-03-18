import React from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ userObj }) => {
  const history = useHistory();

  function inboxDisplay(element) {
    return (
      <div id="InsideMsg">
        <div>From: {`${element.fromUser.username}`}</div>
        <div>{`${element.content}`}</div>
        <a
          id="New"
          onClick={() => {
            handleClick(element.post._id);
          }}
        >
          View My Post: {`${element.post.title}`}
        </a>
      </div>
    );
  }

  function handleClick(postId) {
    history.push(`/Posts/${postId}`);
  }

  function myMessagesDisplay(element) {
    return (
      <div id="InsideMsg">
        <div>(Sent By Me)</div>
        <div>{`${element.content}`}</div>
        <a
          id="New"
          onClick={() => {
            handleClick(element.post._id);
          }}
        >
          Message Again: {`${element.post.title}`}
        </a>
      </div>
    );
  }

  function messages(userObj) {
    return (
      <>
        <div id="Profile">
          Welcome::<span id="User">{`${userObj.username}`}</span>!
        </div>
        <div id="Display">
          <h3 id="Msg">Message Inbox</h3>
          {userObj.messages.map((element) => {
            return userObj.username != element.fromUser.username
              ? inboxDisplay(element)
              : null;
          })}

          <h3 id="Msg">Messages Sent</h3>
          {userObj.messages.map((element) => {
            return userObj.username === element.fromUser.username
              ? myMessagesDisplay(element)
              : null;
          })}
        </div>
      </>
    );
  }

  return <>{userObj.username != null ? messages(userObj) : null}</>;
};

export default Profile;
