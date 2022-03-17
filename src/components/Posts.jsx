import React, { useState, useEffect } from "react";
import { fetchPosts, AllPostInfo } from "../api";
import { Link, useHistory } from "react-router-dom";
import { SinglePost } from "./";
const Posts = ({ loginState, userObj }) => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  function postMatches(post, text) {
    // return true if any of the fields you want to check against include the text
    // strings have an .includes() method
  }


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
          <SinglePost
            key={i}
            posts={posts}
            setPosts={setPosts}
            post={post}
            userObj={userObj}
            loginState={loginState}
          />
        );
      })}
    </div>
  );
};

export default Posts;
