import React from "react";
import { useHistory } from "react-router-dom";
const SinglePost = ({ post, loginState }) => {
  const history = useHistory();

  function handleViewMessage(postId) {
    history.push(`/Posts/${postId}`);
  }

  function deliveryText(post){
    if(post.willDeliver){
      return 'Yes'
    }
    else{
      return 'No'
    }
  }

  return (
    <>
      <h3>{post.title}</h3>
      <>
        <div className="subhead1">username: {post.author.username}</div>
        <span className="subhead1">location:</span>
        <span className="content">{post.location}</span>
        <span className="subhead1">description:</span>
        <span className="content">{post.description}</span>
        <span className="subhead1">price:</span>
        <span className="content">{post.price}</span>
        <span className="subhead1">Deliver?:</span>
        <span className="content">{deliveryText(post)}</span>
      </>

      {loginState ? (
        <button
          onClick={() => {
            handleViewMessage(post._id);
          }}
        >
          View Post
        </button>
      ) : null}
    </>
  );
};

export default SinglePost;
