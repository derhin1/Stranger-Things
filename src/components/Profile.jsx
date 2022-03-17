import React from 'react'
import { useHistory } from "react-router-dom";
const Profile = ({userObj}) => {
    // console.log(userObj, 'userObj')
    const history = useHistory();

    function inboxDisplay(element){
        return (
          <div>
            <div>From: {`${element.fromUser.username}`}</div>
            <div>{`${element.content}`}</div>
            <a onClick={() => {
                handleClick(element.post._id)
            }}>View My Post: {`${element.post.title}`}</a>
          </div>
        );
    }

    function handleClick(postId){
        history.push(`/Posts/${postId}`)
    }

    function myMessagesDisplay(element){
        return (
          <div>
            <div>(Sent By Me)</div>
            <div>{`${element.content}`}</div>
            <a
              onClick={() => {
                handleClick(element.post._id);
              }}
            >
              Message Again: {`${element.post.title}`}
            </a>
          </div>
        );
    }


    function messages(userObj){
        return (
            <>
            <div>Welcome {`${userObj.username}`}</div>

        <h3>Message Inbox</h3>
        {userObj.messages.map((element) => {
          return userObj.username != element.fromUser.username ? inboxDisplay(element) : null;
        })}

        <h3>Messages Sent</h3>
        {userObj.messages.map((element) => {
          return userObj.username === element.fromUser.username ? myMessagesDisplay(element) : null;
        })}
        </>
        )
    }

    return ( 
      <>
      {userObj.username != null ? messages(userObj) : null}
      </>
    );
}

export default Profile