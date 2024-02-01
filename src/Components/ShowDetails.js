
import React, { useEffect } from 'react';
import "../Components/ShowDetails.css";
import API from '../Config/api';
import Comment from './Comment';

const ShowDetails = React.memo((props) => {
  useEffect(() => {
    const postId = props.post.id;
    console.log("PostId" + postId);

    API.get(`posts/${postId}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching post details:', error);
      });
  }, [props.post.id]);

  const handleDelete = () => {
    const postId = props.post.id;

    API.delete(`posts/${postId}`)
      .then(() => {
        console.log('Post deleted successfully');
        props.onDelete();
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };

  return (
    <div className="show-details-container">
      <h1>{props.post.title}</h1>
      <h2>{props.post.content}</h2>
      <div className="comments-container">
        <h3>Comments:</h3>
        {props.post.comments && props.post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="action-buttons">
        <button className="edit-button">Edit</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
});

export default ShowDetails;
