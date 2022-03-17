import React from "react";
import { deletePost } from "../api";
import { Link, useHistory } from "react-router-dom";
import { AllPostInfo } from "./";
const SinglePost = ({ posts, setPosts, post, userObj, loginState }) => {
  const history = useHistory();

  async function handleDelete(token, postId) {
    const data = await deletePost(token, postId);
    const filterPost = posts.filter((post) => {
      return post._id !== postId;
    });
    setPosts(filterPost);
  }

  function handleViewMessage(postId) {
    history.push(`/Posts/${postId}`);
  }

  

  return (
    <>
      <h3>{post.title}</h3>
      <div className="subhead1">username: {post.author.username}</div>

      {loginState ? (
        <button
          onClick={() => {
            handleViewMessage(post._id);
          }}
        >
          View Post
        </button>
      ) : null}

      {userObj ? (
        post.author.username === userObj.username ? (
          <button
            onClick={() => {
              handleDelete(localStorage.getItem("token"), post._id);
            }}
          >
            Delete
          </button>
        ) : null
      ) : null}
    </>
  );
};

export default SinglePost;
