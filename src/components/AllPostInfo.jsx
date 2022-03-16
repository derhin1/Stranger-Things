import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "../api";
import {fetchPosts} from '../api'

const AllPostInfo = () => {
    const params = useParams()
    const [singlePost, setSinglePost] = useState(null)
    console.log(params)
      useEffect(() => {
        async function fetchAllPosts(){
            let data = await fetchPosts();
            let singlePostArray = data.data.posts.filter((post) => {
                return params.id === post._id
            })
            setSinglePost(singlePostArray[0])
          }
          fetchAllPosts()
      }, []);

      let content = singlePost ? (<>
        <span className="subhead1">location:</span>
        <span className="content">{singlePost.location}</span>
        <span className="subhead1">description:</span>
        <span className="content">{singlePost.description}</span>
        <span className="subhead1">price:</span>
        <span className="content">{singlePost.price}</span>
        </>) : null

    return <>{content}</>;
}


export default AllPostInfo