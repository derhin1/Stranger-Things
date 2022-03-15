import React, {useState} from "react";
import { postNewPost } from "../api";

const AddNewPost = ({loginState}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('')
    const [deliver, setDeliver] = useState(false);

    

    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          postNewPost(title,description,price,location,deliver)
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
}

export default AddNewPost