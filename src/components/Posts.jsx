import React, { useState, useEffect } from "react";
import { fetchPosts, login } from "../api";
import { Link, useHistory } from "react-router-dom";
import { SinglePost } from "./";
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
      {posts.map((post, i) => {
        return (
            <SinglePost key ={i} posts={posts} setPosts={setPosts} post={post} />
        );
      })}
    </div>
  );
};

export default Posts;
