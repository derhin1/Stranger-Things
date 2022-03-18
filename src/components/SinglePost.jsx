import React from "react";
import { useHistory } from "react-router-dom";
const SinglePost = ({ post, loginState }) => {
  const history = useHistory();

  function handleViewMessage(postId) {
    history.push(`/Posts/${postId}`);
  }

  function deliveryText(post) {
    if (post.willDeliver) {
      return "Yes";
    } else {
      return "No";
    }
  }

  return (
    <div id="Display">
      <h3 id="DisplayHead">{post.title}</h3>
      <>
        <div>
          {" "}
          <span className="subhead1">
            <mark> Username:</mark>
          </span>{" "}
          {post.author.username}
        </div>
        <span className="subhead1">
          {" "}
          <mark> Location:</mark>
        </span>
        <span className="content">{post.location}</span>
        <span className="subhead1">
          <mark> Description:</mark>
        </span>
        <span className="content">{post.description}</span>
        <span className="subhead1">
          <mark> Price:</mark>
        </span>
        <span className="content">{post.price}</span>
        <span className="subhead1">
          {" "}
          <mark> Deliver?:</mark>
        </span>
        <span className="content">{deliveryText(post)}</span>
      </>

      {loginState ? (
        <button
          id="ViewButton"
          onClick={() => {
            handleViewMessage(post._id);
          }}
        >
          View Post
        </button>
      ) : null}
    </div>
  );
};

export default SinglePost;
