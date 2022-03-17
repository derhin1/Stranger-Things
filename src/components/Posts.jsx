import React, { useState, useEffect } from "react";
import { fetchPosts, AllPostInfo } from "../api";
import { Link, useHistory } from "react-router-dom";
import { SinglePost } from "./";
const Posts = ({ loginState, userObj }) => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  function postMatches(post, text) {
    if (
      post.title.includes(text) ||
      post.author.username.includes(text) ||
      post.location.includes(text) ||
      post.description.includes(text) ||
      post.price.includes(text)
    ) {
      return true;
    }
  }
  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;


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

      <form>
        <input
          type="Text"
          placeholder="Filter Posts"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>

      {postsToDisplay.map((post, i) => {
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
