import React, { useState, useEffect } from "react";
import {fetchPosts} from "../api";
import { Link } from "react-router-dom";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(async () => {
    let data = await fetchPosts();
    setPosts(data.data.posts);
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <Link to='./AddNewPost'>Add New Post</Link>
      {posts.map((element, i) => {
        return (
          <div key ={i}>
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
