

import React, {useState,useEffect} from 'react'
import Posts from '../Components/Posts';
import NewPost from '../Components/NewPost';
import ShowDetails from '../Components/ShowDetails';
import "../Container/DashBoard.css"




function DashBoard() {
  
    const [postsState, setPostsState] = useState(
        [
            { id: 1, title: "Anna Karenina", author: "Leo Tolstoy" },
            { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
            { id: 3, title: "The Great Gatsby", author: "F Scott Fitzgerald" }
        ]
    );
    const [selectedPost, setSelectedPost] = useState(null);
    const [newTitle, setNewTitle] = useState('');

    const handlePostClick = (post) => {
      setSelectedPost(post);
    };
    const handleUpdateName = (newName) => {
      if (selectedPost) {
        const updatedPosts = postsState.map(post =>
          post.id === selectedPost.id ? { ...post, title: newName } : post
        );
        setPostsState(updatedPosts);
      }
    };
  
    
  return (<div>
    <div>DashBoard</div>
    <div className="posts-container"> {postsState.map((post) => (
        <Posts key={post.id} post={post} onClick={() => handlePostClick(post)} />
      ))}
    </div>
    <NewPost onUpdateName={handleUpdateName}/>
    <div>{selectedPost && <ShowDetails post={selectedPost} />}</div>
    </div>
  )
}

export default DashBoard
