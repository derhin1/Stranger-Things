import React, { useState } from "react";
import { postNewPost } from "../api";
import { useHistory } from "react-router-dom";

const AddNewPost = ({ loginState }) => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [deliver, setDeliver] = useState(false);

  async function checkLoggedIn(title, description, price, location, deliver) {
    if (loginState) {
      await postNewPost(title, description, price, location, deliver);
      history.push("/Posts");
    } else {
      history.push("/Login");
    }
  }

  return (
    <form
      id="NewPost"
      onSubmit={(event) => {
        event.preventDefault();
        checkLoggedIn(title, description, price, location, deliver);
      }}
    >
      <h1>Add A New Post</h1>
      <input
        type="Text"
        placeholder="Title"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      ></input>
      <input
        id="DescriptionBox"
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
        id="Location"
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
        <span id="Deliver">Will Deliver?</span>
      </>
      <button type="submit"> Submit </button>
    </form>
  );
};

export default AddNewPost;
