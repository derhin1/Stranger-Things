import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "../api";
import { fetchPosts } from "../api";

const AllPostInfo = ({ userObj }) => {
  const params = useParams();
  const [singlePost, setSinglePost] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [deliver, setDeliver] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    async function fetchAllPosts() {
      let data = await fetchPosts();
      let singlePostArray = data.data.posts.filter((post) => {
        return params.id === post._id;
      });
      setSinglePost(singlePostArray[0]);
    }
    fetchAllPosts();
  }, []);

  console.log(singlePost, "singlePost");

  function editForm() {
    setEditing(true);
  }

  let editInputs = (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        type="Text"
        placeholder="Title"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      ></input>
      <input
        type="Text"
        placeholder="Description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></input>
      <input
        type="Text"
        placeholder="Price"
        value={price}
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      ></input>
      <input
        type="Text"
        placeholder="Location"
        value={location}
        onChange={(event) => {
          setLocation(event.target.value);
        }}
      ></input>
      <>
        <input
          type="checkbox"
          onChange={() => {
            let nextValue = !deliver;
            setDeliver(nextValue);
          }}
        ></input>
        <span style={{ marginLeft: "6px" }}>Will Deliver?</span>
      </>
      <button type="submit"> Submit </button>
    </form>
  );

  let content = singlePost ? (
    <>
      <span className="subhead1">location:</span>
      <span className="content">{singlePost.location}</span>
      <span className="subhead1">description:</span>
      <span className="content">{singlePost.description}</span>
      <span className="subhead1">price:</span>
      <span className="content">{singlePost.price}</span>
    </>
  ) : null;

  return (
    <>
      {content}
      {userObj ? (
        singlePost ? (
          singlePost.author.username === userObj.username ? (
            <button onClick={editForm}>Edit</button>
          ) : null
        ) : null
      ) : null}
      {editing ? editInputs : null}
    </>
  );
};

export default AllPostInfo;
