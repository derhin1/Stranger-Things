import React from 'react'

const Profile = ({userObj}) => {
    console.log(userObj, 'userObj')



    return (
      <>
        <div>Welcome {`${userObj.username}`}</div>

        <h3>Message Inbox</h3>
        {userObj.messages.map((element) => {
          return userObj.username != element.fromUser.username ? (
            <div>{`${element.content}`}</div>
          ) : null;
        })}

        <h3>Messages Sent</h3>
        {userObj.messages.map((element) => {
          return userObj.username === element.fromUser.username ? (
            <div>{`${element.content}`}</div>
          ) : null;
        })}
      </>
    );
}

export default Profile