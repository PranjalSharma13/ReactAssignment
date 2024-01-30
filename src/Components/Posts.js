import React from "react";
import Post from "./Post";
import "../Components/Posts.css";

const Posts = (props) => {
  const handlePostClick = () => {
    if (props.onClick) {
      props.onClick(props.post);
    }
  };
  return (
    <div className="posts-container" onClick={handlePostClick}>
      <Post key={props.post.id} post={props.post} />
     </div>
  );
};

export default Posts;
