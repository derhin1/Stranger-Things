import React from "react";
import { deletePost } from "../api";

const SinglePost = ({ posts, setPosts, post, userObj }) => {
  async function handleDelete(token, postId) {
    const data = await deletePost(token, postId);
    const filterPost = posts.filter((post) => {
      return post._id !== postId;
    });
    setPosts(filterPost);
  }
  return (
    <>
      <h3>{post.title}</h3>
      <div className="subhead1">username:</div>
      <span className="content">{post.author.username}</span>
      <span className="subhead1">location:</span>
      <span className="content">{post.location}</span>
      <span className="subhead1">description:</span>
      <span className="content">{post.description}</span>
      <span className="subhead1">price:</span>
      <span className="content">{post.price}</span>
      {post.author.username === userObj.username ? (
        <button
          onClick={() => {
            handleDelete(localStorage.getItem("token"), post._id);
          }}
        >
          Delete
        </button>
      ) : null}
    </>
  );
};

export default SinglePost;
