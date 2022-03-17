import React from 'react'

const Profile = ({userObj}) => {
    console.log(userObj, 'userObj')

    function inboxDisplay(element){
        return (
          <div>
            <div>From: {`${element.fromUser.username}`}</div>
            <div>{`${element.content}`}</div>
            <div>Post: {`${element.post.title}`}</div>
          </div>
        );
    }

    function myMessagesDisplay(element){
        return (
          <div>
            <div>Sent By Me</div>
            <div>{`${element.content}`}</div>
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