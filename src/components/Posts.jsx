import React, { useState, useEffect } from "react";
import { fetchPosts, login } from "../api";
import { Link, useHistory } from "react-router-dom";
const Posts = ({ loginState }) => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  useEffect(async () => {
    let data = await fetchPosts();
    setPosts(data.data.posts);
  }, []);
  function checkLoggedIn(loginState) {
    if (loginState) {
      history.push("/AddNewPost");
    } else {
      history.push("/Login");
    }
  }
  return (
    <div>
      <h1>Posts</h1>
      <a
        onClick={() => {
          checkLoggedIn(loginState);
        }}
      >
        {" "}
        Add New Post{" "}
      </a>
      {posts.map((element, i) => {
        return (
          <div key={i}>
            <h3>{element.title}</h3>
            <div className="subhead1">username:</div>
            <span className="content">{element.author.username}</span>
            <span className="subhead1">location:</span>
            <span className="content">{element.location}</span>
            <span className="subhead1">description:</span>
            <span className="content">{element.description}</span>
            <span className="subhead1">price:</span>
            <span className="content">{element.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
