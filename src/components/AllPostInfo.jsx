import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchPosts, updateSinglePost, postAMessage, deletePost } from "../api";

const AllPostInfo = ({ userObj }) => {
  const history = useHistory()
  const params = useParams();
  const [singlePost, setSinglePost] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [deliver, setDeliver] = useState(false);
  const [editing, setEditing] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messageSent, setMessageSent] = useState(false)

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
      <h1>{singlePost.title}</h1>
      <div className="subhead1">username: {singlePost.author.username}</div>
      <span className="subhead1">location:</span>
      <span className="content">{singlePost.location}</span>
      <span className="subhead1">description:</span>
      <span className="content">{singlePost.description}</span>
      <span className="subhead1">price:</span>
      <span className="content">{singlePost.price}</span>
      <span className="subhead1">Deliver?:</span>
      <span className="content">{deliveryText(singlePost)}</span>
    </>
  ) : null;
  async function postNewMessage(token, postId, content) {
   let data = await postAMessage(token, postId, content);
   if(data._id != null){
     setMessageSent(true)
   }
  }

async function handleDelete(token, postId) {
  await deletePost(token, postId);
  history.push('/Posts')
}


 function deliveryText(post) {
   if (post.willDeliver) {
     return "Yes";
   } else {
     return "No";
   }
 }

 function sendMessageForm(){
   return (
      <>
        <h2> Send A Message </h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            postNewMessage(
              localStorage.getItem("token"),
              singlePost._id,
              messageText
            );
            setMessageText("");
          }}
        >
          <input
            type="Text"
            placeholder="Send a Message"
            value={messageText}
            onChange={(event) => {
              setMessageText(event.target.value);
            }}
          ></input>
          <button type="submit"> Submit </button>
        </form>
      </>
   )
 }



  return (
    <>
      <>
        {content}
        {userObj ? (
          singlePost ? (
            singlePost.author.username === userObj.username ? (
              <>
                <button onClick={editForm}>Edit</button>
                <button
                  onClick={() => {
                    handleDelete(localStorage.getItem("token"), singlePost._id);
                  }}
                >
                  Delete
                </button>
              </>
            ) : sendMessageForm()
          ) : null
        ) : null}
        {editing ? editInputs : null}

      </>

      {messageSent ? <div>Message was sent!</div> : null}
    </>
  );
};

export default AllPostInfo;
