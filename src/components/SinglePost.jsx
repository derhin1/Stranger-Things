import React from 'react'

const SinglePost = ({posts, setPosts, post}) => {
    return (
      <>
        <h3>{post.title}</h3>
        <div className="subhead1">username:</div>
        <span className="content">{post.author.username}</span>
        <span className="subhead1">location:</span>
        <span className="content">{post.location}</span>
        <span className="subhead1">description:</span>
        <span className="content">{post.description}</span>
        <span className="subhead1">price:</span>
        <span className="content">{post.price}</span>
      </>
    );
}



export default SinglePost