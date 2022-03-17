import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "../api";
import { fetchPosts, updateSinglePost } from "../api";

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

  function editForm() {
    setEditing(true);
  }

  // console.log(singlePost)

  async function handleSubmit(
    token,
    singlePostId,
    title,
    description,
    price,
    location,
    deliver
  ) {
    let updatedPost = await updateSinglePost(
      token,
      singlePostId,
      title,
      description,
      price,
      location,
      deliver
    );
    setSinglePost(updatedPost.data.post);
    setEditing(false);
  }

  let editInputs = (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(
          localStorage.getItem("token"),
          singlePost._id,
          title,
          description,
          price,
          location,
          deliver
        );
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
      <h3>{singlePost.title}</h3>
      <div className="subhead1">username: {singlePost.author.username}</div>
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
