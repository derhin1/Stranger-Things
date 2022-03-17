import React from 'react'

const Profile = ({userObj}) => {
    console.log(userObj, 'userObj')

    return (
      <>
        <div>Welcome {`${userObj.username}`}</div>

        <h3>Message Inbox</h3>
        {userObj.messages.map((element) => {
          return userObj.username != element.fromUser.username ? (
            <div>
            <div>From: {`${element.fromUser.username}`}</div>
            <div>{`${element.content}`}</div>
            <div>Post: {`${element.post.title}`}</div>
            </div>
          ) : null;
        })}

        <h3>Messages Sent</h3>
        {userObj.messages.map((element) => {
          return userObj.username === element.fromUser.username ? (
            <div>
                <div>Sent By Me</div>
              <div>{`${element.content}`}</div>
            </div>
          ) : null;
        })}
      </>
    );
}

export default Profile