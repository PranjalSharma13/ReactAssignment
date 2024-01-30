import React, { useState } from "react";
import "../Components/Post.css";
import ShowDetails from "./ShowDetails";

const Post = (props) => {


  return (
   
    <div className="post-container" >
      <div>
        <h2>{props.post.name}</h2>
      </div>
      <div>
        <h3>Author: {props.post.author}</h3>
      </div>
      <div>
        <h3>ID: {props.post.id}</h3>
      </div>
    
    </div>
  );
};

export default Post;
