import React from "react";
import { deletePost } from "../api";
import { Link, useHistory } from "react-router-dom";
import { AllPostInfo } from "./";
const SinglePost = ({ posts, setPosts, post, userObj, loginState }) => {
  const history = useHistory();

  function handleViewMessage(postId) {
    history.push(`/Posts/${postId}`);
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
