import React from 'react';
import "../Components/ShowDetails.css";

function ShowDetails(props) {
  return (
    <div className="show-details-container">
      <h1>{props.post.title}</h1>
      <div className="action-buttons">
        <button className="edit-button">Edit</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
}

export default ShowDetails